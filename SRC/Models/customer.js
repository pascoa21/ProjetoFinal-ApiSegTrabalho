const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({

    name:{
        type: String,
        required : true
    },
    
    cnpj:{
        type: Number,
        required : true
    },

    email:{
        type: String,
        require: true
    },

    password:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Customer', schema)