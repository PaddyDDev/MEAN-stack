const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temperatureSchema = new Schema
({
    //temperature being the temperature that the sensor sends
    temperature:{type: Number},
    room:{type: String},
    updated: { type: Date, default: Date.now }
    /*Try and use the decimal but unsure how to
            decimal: Schema.Types.Decimal128
    */
});

module.exports = mongoose.model('Message', temperatureSchema);