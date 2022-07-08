const mongoose = require('mongoose');

// Only properties in the Schema will be created.
// Any requests with more properties will be ignored.
const TaskSchema = new mongoose.Schema({
    name:String,
    completed:Boolean
})

module.exports = mongoose.model('Task', TaskSchema)