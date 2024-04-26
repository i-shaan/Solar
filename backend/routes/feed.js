// const express = require('express');
// const Feed = require('../modals/Feedback');
// const { body, validationResult } = require('express-validator');
// router.post('/submitfeedback', [
//     body('username', 'Username is required').trim().notEmpty(),
//     body('feedback', 'Feedback is required').trim().notEmpty(),
// ], async (req, res) => {
//     const { username, feedback } = req.body;
//     try {
//         // Validate the request body
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ success: false, errors: errors.array() });
//         }

//         // Save the feedback to the database
//         const newFeedback = new Feed({ username, feedback });
//         await newFeedback.save();

//         return res.status(201).json({ success: true, message: 'Feedback submitted successfully' });
//     } catch (error) {
//         console.error('Error submitting feedback:', error);
//         return res.status(500).json({ success: false, error: 'Server error' });
//     }
// });