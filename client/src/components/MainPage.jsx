import styles from "../components/MainPage.module.css";
import { PiSmileySad } from "react-icons/pi";
import { useState } from "react";

function MainPage() {
 

  return (
    <>
      <div className={styles.addBtn}>
        <button onClick={() => setShowDialog(true)}>Add Notes</button>
      </div>

     
      <div className={styles.noteContainer}>
       
          <div className={styles.blankHeading}>
            <PiSmileySad size={70} />
            <h3>Sorry !! No notes found </h3>
            <p>Click on "Add notes" to start adding notes.</p>
          </div>
    
      </div>
    </>
  );
}

export default MainPage;
