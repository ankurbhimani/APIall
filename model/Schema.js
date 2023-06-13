const mongoose = require('mongoose');

const database = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('database', database);