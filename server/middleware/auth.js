// middleware/auth.js
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET_CODE || "randomsecretkey";

export const authenticate = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Access Denied. No token provided." });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // attaches { id: user._id }
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
