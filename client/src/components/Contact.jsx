import styles from "../components/Contact.module.css";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const base_url = "https://syncnote-n7r7.onrender.com";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show success toast instantly
    toast.success("Message sent!", {
      autoClose: 1500,
      position: "top-right",
    });

    // Copy & reset the form
    const submittedData = { ...formData };
    setFormData({ firstName: "", lastName: "", email: "", message: "" });

    try {
      await axios.post(`${base_url}/api/contact`, submittedData);
    } catch (err) {
      console.error("Error sending message:", err.response?.data || err.message);
      toast.error("Message may not have been sent. Try again.", {
        autoClose: 2000,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.mainHeading}>
        <h2>
          Have any <span>query?</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.contactCard}>
        <div className={styles.nameField}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your query or suggestion"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </>
  );
}

export default Contact;
