// 비동기 로직에서 Error handle 해주는 모듈
const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// Get All Contacts
// GET /contacts
const getAllContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    const users = [
        {name: "Kim", email: "kim@kim.com", phone: "01011111111"},
        {name: "Lee", email: "Lee@Lee.com", phone: "01022222222"}
    ]
    res.render('getAll', {users: users});
});

// Create Contacts
// POST /contacts
const createContact = asyncHandler(async(req, res) => {
    const {name, email, phone} = req.body;

    if (!name || !email || !phone) {
        return res.send('Input Value Error!');
    }

    const contact = await Contact.create({
        name, email, phone
    });

    res.send('Contact Created!');
});

// Get Contact
// GET /contacts/:id
const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
});

// Update Contact
// PUT /contacts/:id
const updateContact = asyncHandler(async(req, res) => {
    const id = req.params.id;
    const {name, email, phone} = req.body;
    const contact = await Contact.findById(id);
    if (!contact) {
        throw new Error("Contact not found!");
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    contact.save();

    res.json(contact);
});

// Delete Contact
// DELETE /contacts/:id
const deleteContact = asyncHandler(async(req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if (!contact) {
        throw new Error('Contact not found!');
    }

    await Contact.deleteOne();
    res.send('Deleted!');
});

module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact};