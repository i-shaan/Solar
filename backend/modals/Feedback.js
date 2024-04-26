const mongoose = require('mongoose');
const { Schema } = mongoose;
const { body, validationResult } = require('express-validator');
const FeedbackSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    Feedback: {
        type: String,
        required: true,
    
    }
})
const Feed = mongoose.model('feedback', FeedbackSchema);

module.exports = Feed;