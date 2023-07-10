const mongoose= require('mongoose');
const collectionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})
const collections = mongoose.model('collections', collectionSchema);
module.exports= collections;