
import styles from "../components/Navbar.module.css"; 
import { useNavigate } from "react-router-dom";



function Navbar() {
  const navigate= useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.replace("/login");
  }

  return (
    <>
   
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <p onClick={()=>navigate("/home")}>SyncNote</p>
        </div>
        <div className={styles.navItems}>
          <p onClick={()=>navigate("/about")}>About</p>
          <p onClick={()=>navigate("/features")}>Features</p>
          <p onClick={()=>navigate("/contact")}>Contact Us</p>
        </div>
        <div className={styles.navBtn}>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <hr className={styles.navLine} />
    
    
    </>
    
  );
}

export default Navbar;
