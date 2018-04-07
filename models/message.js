const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema
({
    //content being the message the user sends and username being the person who posted it
    content:{type: String, required: true},
    username:{type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);