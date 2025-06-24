import styles from "../components/Contact.module.css";

function Contact(){
    return (
        <> 
  <div className={styles.mainHeading}>
        <h2>
         Have any <span>query?</span>
        </h2>
      </div>

      <div className={styles.contactCard}>
        <div className={styles.nameField}>
            <input type="text"  placeholder="First Name"/>
        <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" name="" id="" placeholder="Email Address" />
        <textarea name="" id="" placeholder="Your query or suggestion"></textarea>
        <button className={styles.submitBtn}>Send Message</button>

      </div>
        
        </>
    );
}

export default Contact;