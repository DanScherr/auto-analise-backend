const mongoose = require('mongoose');

const CriacaoSchema = new mongoose.Schema({
    acontecimento: {
        type: String,
        required: [true, 'Please add an acontecimento'],
        unique: true,
        trim: true,
        maxLength: [500, 'Description needs to be less than 500']
    },
    pensamento: {
        type: String,
        required: [true, 'Please add an acontecimento'],
        unique: true,
        trim: true,
        maxLength: [500, 'Description needs to be less than 500']
    },
    sentimentoDesc: {
        type: String,
        required: [true, 'Please add an acontecimento'],
        unique: true,
        trim: true,
        maxLength: [500, 'Description needs to be less than 500']
    },
    sentimentoState: Number,
    atitude: {
        type: String,
        required: [true, 'Please add an acontecimento'],
        unique: true,
        trim: true,
        maxLength: [500, 'Description needs to be less than 500']
    },
});

module.exports = mongoose.model('Criacao', CriacaoSchema);