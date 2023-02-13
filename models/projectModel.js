const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pas de nom'],
    },
    githubLink: {
        type: String,
        required: [true, 'Pas de mail'],
    },
    link: {
        type: String,
        required: [true, 'Pas de mot de passe']
    },
    img: {
        type: String,
        required: [true, 'Pas de mot de passe']
    },

})

const projectModel = mongoose.model('project', projectSchema);

module.exports = projectModel