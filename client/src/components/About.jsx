import styles from "../components/About.module.css";
import { LuNotebookPen } from "react-icons/lu";

function About() {
  return (
    <>
      <div className={styles.mainHeading}>
        <h2>
          About <span>SyncNote</span>
        </h2>
      </div>
      <div className={styles.aboutSection}>
        <p>
          <LuNotebookPen size={19} className={styles.icon} />
          SyncNote is a smart, cloud-powered notes app that helps you capture
          your ideas and access them anytime, anywhere — all in one place.
        </p>
        <p>
          <LuNotebookPen size={19} className={styles.icon} />
          Built with the robust MERN stack: React.js for a smooth user
          experience, Express.js and Node.js for fast backend performance, and
          MongoDB for secure data storage.
        </p>
        <p>
          <LuNotebookPen size={19} className={styles.icon} />
          SyncNote is built to be intuitive, lightweight, and focused — so your
          ideas are always just a click away.
        </p>
        <p>
          <LuNotebookPen size={19} className={styles.icon} />
          Designed with simplicity in mind using clean, function-based React
          components for easy navigation and interaction.
        </p>
        <p>
          <LuNotebookPen size={19} className={styles.icon} />
          Custom-built Express APIs ensure secure user authentication and
          efficient note management.
        </p>
        <p>
          <LuNotebookPen size={19} className={styles.icon} />
          All your notes are stored in MongoDB, making data retrieval fast and
          reliable.
        </p>
        <p>
          <LuNotebookPen size={19} className={styles.icon} />
          From jotting down quick thoughts to managing long-form content, users
          can effortlessly create, update, delete, and organize their notes.
        </p>
        <p>
          <LuNotebookPen size={19} className={styles.icon} />
          Fully responsive design ensures a consistent experience across mobile,
          tablet, and desktop devices.
        </p>
      </div>
    </>
  );
}

export default About;
