const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({

    Risc:{
        type: String,
        required : true, 
        trim: true
    },

    Agente:{
        type: String,
        require: true,
        trim: true,
        index: true,
        unique: true
    },

    description:{
        type: String,
        required: true,
    },

    equipamento:{
        type: String,
        required: true
    },

    validade:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Product', schema)