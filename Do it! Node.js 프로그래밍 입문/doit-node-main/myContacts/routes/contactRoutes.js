const express = require('express');
const router = express.Router();

// Middleware(router) 방식
router.route('/')
    .get((req, res) => {
        res.send('This is Contacts Page');
    })
    .post((req, res) => {
        console.log(req.body)
        const {name, email, phone} = req.body;

        if (!name || !email || !phone) {
            return res.send('Input Value Error!');
        }

        res.send(`Contacts Created!`);
    })

router.route('/:id')
    .get((req, res) => {
        res.send(`Create Contacts for ID: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update Contacts for ID: ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete Contacts for ID: ${req.params.id}`);
    })

module.exports = router;