import styles from "../components/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { LuTableOfContents } from "react-icons/lu";
import darkBg from "../assets/syncnoteDark.webp";
import lightBg from "../assets/syncnote_bg.webp";


function Navbar() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.navbar}
        style={{
    backgroundImage: `url(${darkMode ? darkBg : lightBg})`,
  }}>
          <div className={styles.logo}>
            <p onClick={() => navigate("/home")}>SyncNote</p>
          </div>
          <div className={styles.navItems}>
            <p onClick={() => navigate("/about")}>About</p>
            <p onClick={() => navigate("/features")}>Features</p>
            <p onClick={() => navigate("/contact")}>Contact Us</p>
          </div>
          <div className={styles.navBtn}>
            {darkMode ? (
              <IoMoonOutline size={21} onClick={toggleTheme} style={{ cursor: "pointer" }} />
            ) : (
              <GoSun size={21} onClick={toggleTheme} style={{ cursor: "pointer" }} />
            )}
            <button className={styles.logBtn} onClick={handleLogout}>
              Logout
            </button>
            <LuTableOfContents
              className={styles.hamburger}
              size={22}
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <hr className={styles.navLine} />
      </div>

      
      {showSidebar && (
        <>
          <div className={styles.backdrop} onClick={toggleSidebar}></div>
          <div className={styles.sidebar}>
             <p onClick={() => { navigate("/home"); toggleSidebar(); }}>Home</p>
            <p onClick={() => { navigate("/about"); toggleSidebar(); }}>About</p>
            <p onClick={() => { navigate("/features"); toggleSidebar(); }}>Features</p>
            <p onClick={() => { navigate("/contact"); toggleSidebar(); }}>Contact Us</p>
            <p onClick={() => { handleLogout(); toggleSidebar(); }}>Logout</p>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
