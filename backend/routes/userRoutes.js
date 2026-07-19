import express from "express";
import User from "../models/user.js";
import generateToken from "../utils/JWT_Token_generate.js";

const router = express.Router();

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
router.post("/register", async (req, res) => {
    try {
        const { type, userName, name, email, phone, password, url } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ 
            $or: [
                { email: email.toLowerCase() }, 
                { userName: userName.toLowerCase() }
            ] 
        });

        if (userExists) {
            return res.status(400).json({ 
                message: "User with this email or username already exists" 
            });
        }

        // Create new user
        const user = await User.create({
            type,
            userName,
            name,
            email: email.toLowerCase(),
            phone,
            password,
            url: url || []
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                userName: user.userName,
                email: user.email,
                type: user.type,
                message: "Registration successful"
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: error.message || "Server Error" });
    }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email: email.toLowerCase() });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                userName: user.userName,
                email: user.email,
                role: user.type.toLowerCase(), // frontend expects lowercase 'company' or 'influencer'
                token: generateToken(user.userName),
                primaryNiche: user.type === "Influencer" ? "Fitness" : "Fitness" // mock niches if not in schema
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: error.message || "Server Error" });
    }
});

export default router;
