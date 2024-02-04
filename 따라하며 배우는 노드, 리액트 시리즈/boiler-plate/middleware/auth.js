const {User} = require('../models/User');

/* Authentication MiddleWare */
let auth = (req, res, next) => {
    // Get token from client cookie
    let token = req.cokkies.x_auth;
    
    // Decode token and get user
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({isAuth: false, error: true});

        req.token = token;
        req.user = user;
        next();
    });
}

module.exports = {auth};