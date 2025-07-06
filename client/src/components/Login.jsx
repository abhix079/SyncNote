import styles from "../components/Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const base_url = "https://syncnote-n7r7.onrender.com";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${base_url}/api/auth/login`, {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 2500,
      });

      setTimeout(() => navigate("/home"), 2600);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <h1>
            Welcome to <span>SyncNote !!</span>
          </h1>
          <p>Your cloud-based note app</p>
        </div>
        <div className={styles.card}>
          <h2>Log In</h2>
          <div className={styles.formDetails}>
            <p>Username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              onKeyDown={handleKeyDown}
            />

            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              onKeyDown={handleKeyDown}
            />

            {error && <div className={styles.errMsg}>{error}</div>}
          </div>

          <button onClick={handleLogin}>Sign In</button>

          <div className={styles.footer}>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Register Now</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
