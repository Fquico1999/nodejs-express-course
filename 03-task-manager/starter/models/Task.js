const mongoose = require('mongoose');

// Only properties in the Schema will be created.
// Any requests with more properties will be ignored.
// If we do impose validation, need to handle validation Error -UnhandledPromiseRejection
const TaskSchema = new mongoose.Schema({
    name:{
        type: String, 
        required:[true, 'Must provide name'],
        trim:true,
        maxlength:[20, 'name cannot exceed 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)