const MessageModel = require("./MessageModel");

module.exports.getForm = async (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
}

module.exports.postFormData = async (req, res) => {
    let newMessage = new MessageModel ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    })
    newMessage.save()
    res.sendFile(__dirname + '/public/answer.html')
}