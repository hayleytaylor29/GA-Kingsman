const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    messages: []
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;