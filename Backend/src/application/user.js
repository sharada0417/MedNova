import User from "../infrastructure/schemas/user.js";
import bcrypt from "bcryptjs";

// Create new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};
