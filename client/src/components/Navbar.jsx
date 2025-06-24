import styles from "../components/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoSun } from "react-icons/go";
import { LuTableOfContents } from "react-icons/lu";

function Navbar() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <p onClick={() => navigate("/home")}>SyncNote</p>
          </div>
          <div className={styles.navItems}>
            <p onClick={() => navigate("/about")}>About</p>
            <p onClick={() => navigate("/features")}>Features</p>
            <p onClick={() => navigate("/contact")}>Contact Us</p>
          </div>
          <div className={styles.navBtn}>
            <GoSun size={21} />
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

      {/* Sidebar + Backdrop */}
      {showSidebar && (
        <>
          <div className={styles.backdrop} onClick={toggleSidebar}></div>
          <div className={styles.sidebar}>
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
