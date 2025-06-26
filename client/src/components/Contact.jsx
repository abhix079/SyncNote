import styles from "../components/Contact.module.css";
import { useState } from "react";
import axios from "axios";


function Contact(){

   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/sendMsg", formData);

      alert("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      alert("Error sending message!");
    }
  };


    return (
        <> 
   <div className={styles.mainHeading}>
        <h2>
          Have any <span>query?</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.contactCard}>
        <div className={styles.nameField}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}  required/>
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}  />
        </div>
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required/>
        <textarea name="message" placeholder="Your query or suggestion" value={formData.message} onChange={handleChange} required />
        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
        </>
    );
}

export default Contact;