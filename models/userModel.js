const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: [true, 'Pas de mail'],
    },
    password: {
        type: String,
        required: [true, 'Pas de mot de passe']
    },

})

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel