import contactMsg from "../models/Contact.js";

export const sendMsg = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    const newMsg = new contactMsg({ firstName, lastName, email, message });
    await newMsg.save();
    res.status(201).json({ message: "Message stored successfully" });
  } catch (err) {
    console.error("Message saving error", err.message);
    res.status(500).json({ message: "Error saving message" });
  }
};
