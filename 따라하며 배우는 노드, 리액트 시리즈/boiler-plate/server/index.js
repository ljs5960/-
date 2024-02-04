const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const {auth} = require('./middleware/auth');
const {User} = require('./models/User');
const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected!')).catch(err => console.log(err));

// Specify BodyParser to Encode 'application/x-www-form-urlencoded'
app.use(bodyParser.urlencoded({extended: true}));

// Specify BodyParser to Encode 'application/json'
app.use(bodyParser.json());
app.use(cookieParser());

/* Home Router */
app.get('/', (req, res) => res.send('Hello World!'));

/* Register Router */
app.post('/api/users/register', async(req, res) => {
    const user = new User(req.body);
    
    try {
        await user.save();
        return res.status(200).json({success: true});
    } catch(err) {
        return res.json({success: false, err});
    }
});

/* Login Router */
app.post('/api/users/login',(req, res) =>{
    // Find Email from DB
    User.findOne({email: req.body.email}).then(docs=>{
        if (!docs) {
            return res.json({
                loginSuccess: false,
                messsage: "User not Found!"
            });
        } else {
            docs.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch) {
                    return res.json({loginSuccess: false, messsage: 'Incorrect Password!'});
                } else {
                    // Generate Token if password is matched
                    docs.generateToken((err, user) => {
                        if (err) {
                            return res.status(400).send(err);
                        } else {
                            // Save Token
                            res.cookie("x_auth", user.token)
                                .status(200)
                                .json({loginSuccess: true, userId: user._id});
                        }
                    });
                }
            });
        }
    })
    .catch((err)=>{
        return res.status(400).send(err);
    })
});

/* Authenticate Router */
app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    });
});

/* Logout Router */
app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id}, {token: ''}, (err, user) => {
        if (err) return res.json({success: false, err});
        else return res.status(200).send({success: true});
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));