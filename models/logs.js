const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    Title: {type:String, required: true },
    Entry: {type: String, required: true },
    shipIsBroken: {type:Boolean, default:true},
});

const log = mongoose.model('log', logSchema);

module.exports = log;