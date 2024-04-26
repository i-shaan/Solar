const express = require('express');
const User = require('../modals/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET = "mySecret123!@#";

// ROUTE 1: Creating User using: POST "/api/auth/createuser"
router.post('/createuser', [
    body('username', 'Name must be atleast 3 characters').isLength({ min: 3 }), 
    body('password', 'Password must be atleast 6 characters').isLength({ min: 6 }),
    body('email', 'Enter a valid email').trim().isEmail(),
], async (req, res) => {
    let success = false;
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success,error: "Email already used" });
        }

        //Creating a new user
        const salt = await bcrypt.genSalt(10);
        const finalPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            username: req.body.username,
            password: finalPass,
            email: req.body.email
        });
        const data = {
            user: {
                id: user.id,
                
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken });
    } catch (err) {
        console.log("Server error");
    }
});

//  ROUTE 2:Authenticate user using: POST "/api/auth/login"
router.post('/userlogin', [
    body('email', 'Enter a valid email').trim().isEmail(),
    body('password', 'Blank password ').exists(),
], async (req, res) => {
    let success=false;
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Please enter correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please enter correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken, username: user.username  });
        

    } catch (error) {
        return res.status(500).send({success,error:"Server Error"});
    }
});



module.exports = router;