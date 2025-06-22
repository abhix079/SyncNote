import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET_CODE || "randomsecretkey";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check for existing username or email
    const existingUser = await User.findOne({
      $or: [{ username }, { email }]
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ field: "username", message: "Username already exists" });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ field: "email", message: "Email already exists" });
      }
    }

    // Check email format
    if (!email.includes("@gmail.com")) {
      return res.status(400).json({ field: "email", message: "Invalid email format. Use a Gmail address." });
    }

    // Hash and save
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPass });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log("Signup Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.log("Login error", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
