
import styles from "../components/Navbar.module.css"; 
import { useNavigate } from "react-router-dom";



function Navbar() {
  const navigate= useNavigate();

  return (
    <>
   
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <p>SyncNote</p>
        </div>
        <div className={styles.navItems}>
          <p onClick={()=>navigate("/about")}>About</p>
          <p onClick={()=>navigate("/features")}>Features</p>
          <p onClick={()=>navigate("/contact")}>Contact Us</p>
        </div>
        <div className={styles.navBtn}>
          <button onClick={()=>navigate("/login")}>Login / Signup</button>
        </div>
      </div>
      <hr className={styles.navLine} />
    
    
    </>
    
  );
}

export default Navbar;
