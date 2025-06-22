import styles from "../components/Home.module.css";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            
            <div className={styles.mainHeading}>
               
 <h3>Your cloud-based note app</h3>
                <p>Your Ideas, Everywhere</p>


            </div>

            <div className={styles.subHead}>
                <p>Capture, organize and sync your thoughts across all devices.</p>
                <p>Experience the future of note taking with SyncNote's intelligent cloud platform.</p>
            </div>

            <div className={styles.startBtn}>
                <BsFileEarmarkPlus size={110} color="grey" opacity={0.9} onClick={()=>navigate("/login")}/>
                <p>Click on the "Add" button to start adding notes</p>
            </div>




        </>
    )
}

export default Home;