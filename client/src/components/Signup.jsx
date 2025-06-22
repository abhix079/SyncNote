import styles from "../components/Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/auth/signup", {
      username,
      email,
      password,
    });
    console.log(res.data);
    navigate("/");
  } catch (err) {
    const { field, message } = err.response?.data || {};

    if (field === "username") {
      setError("Username already exists");
    } else if (field === "email") {
      if (message.toLowerCase().includes("invalid")) {
        setError("Invalid email format");
      } else {
        setError("Email already exists");
      }
    } else {
      setError("Signup failed");
    }
  }
};

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h1>Welcome to <span>SyncNote !!</span></h1>
        <p>Your cloud-based note app</p>
      </div>
      <div className={styles.card}>
        <h2>Create Account</h2>
        <div className={styles.formDetails}>
          <p>Username</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />

          <p>Email</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email-id" />

          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />

          {error && <div className={styles.errMsg}>{error}</div>}
        </div>

        <button onClick={handleSignup}>Sign Up</button>
        <div className={styles.footer}>
          Already have an account ? <span onClick={() => navigate("/login")}>Log in</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
