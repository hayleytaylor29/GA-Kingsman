const express = require('express');
const session = require('express-session');
const router = express.Router();
const User = require('../models/users');


//create a new user
router.get('/new', (req, res) => {
    res.render('./sessions/new.ejs');
});

router.post('/', (req, res) => {
    User.findOne({'username': req.body.username}, (err,
        foundUser) => {
            if (req.body.password === foundUser.password) {
                req.session.isLoggedIn = true;
                console.log('logged in')
                console.log(foundUser)
                res.redirect('/room')
            } else {
                res.send('Incorrect Login Info, Try Again!')
            }
        });
        console.log(req.body);
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Could not log out')
            res.redirect('/')
        } else {
            console.log('Logout was successful')
            res.redirect('/');
        }
    });
})

module.exports = router;