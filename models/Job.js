const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    empNum: { type: String, required: true },
    timeIn: { type: String, required: true },
    timeOut: { type: String, required: true },
    opNum: { type: String, required: true },
    jobNum: { type: String, required: true },
    partNum: { type: String, required: true },
    jobNotes: { type: String },
    dept: { type: String, required: true },
    cycleTime: { type: String, required: true },
    jobPhoto: { type: String }
});

module.exports = mongoose.model('Job', JobSchema);
