const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema
({
    //content being the message the user sends and username being the person who posted it
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},//unique is used as can not be the same
    //note, messages as a user may have more than one message, but in the messages.js
    //have user, as a message will only have one user
    messages:[{type: Schema.Types.ObjectId, ref: 'Message'}]//means mongoose will handel the ids in the backgroud
});
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);