const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});
const user = mongoose.model('user', userSchema)
module.exports = user;