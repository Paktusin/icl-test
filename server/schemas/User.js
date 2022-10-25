const mongoose = require('mongoose');

const User = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
})

module.exports = User;