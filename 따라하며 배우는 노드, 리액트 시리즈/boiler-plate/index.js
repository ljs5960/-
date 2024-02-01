const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const config = require('./key');
const {User} = require('./models/User');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected!')).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register', async(req, res) => {
    const user = new User(req.body);

    try {
        return res.status(200).json({success: true});
    } catch(err) {
        return res.json({success: false, err});
    }
});

app.post('/login', (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: 'User Not Found!'
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({loginSuccess: false, message: 'Incorrect Password!'});
            } else {
                user.generateToken((err, user) => {

                });
            }
        });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));