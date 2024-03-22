const mongoose = require('mongoose');

const messageSchema =  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    message: String
})

module.exports = mongoose.model("UsersMessages", messageSchema);

