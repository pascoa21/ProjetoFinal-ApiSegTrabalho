const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    risco:{
        type: String,
        required : true, 
        trim: true
    },

    description:{
        type: String,
        required: true,
        trim: true
    },

    validade:{
        type: Number,
        required: true
    },

    equipamento:{
        type: String,
        required: true
    },
    
})