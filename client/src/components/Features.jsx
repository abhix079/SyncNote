import styles from "../components/Features.module.css";
import { MdOutlineCloudSync } from "react-icons/md";

import { LuFileLock2 } from "react-icons/lu";
import { MdOutlineImportantDevices } from "react-icons/md";
import { MdColorLens } from "react-icons/md";

const featuresData = [
  {
    icon: <MdOutlineCloudSync size={50} color="orange" />,
    title: "Cloud Sync",
    desc: [
      "Your notes are automatically synced across all devices in real time.",
    ],
  },
  {
    icon: <LuFileLock2 size={50} color="orange" />,
    title: "Secure & Private",
    desc: [
      "End-to-end encryption ensures your thoughts remain private and secure in the cloud.",
    ],
  },
  {
    icon: <MdOutlineImportantDevices size={50} color="orange" />,
    title: "Cross Platform",
    desc: [
      "Access your notes on web, mobile and desktop apps with seamless experience.",
    ],
  },
  {
    icon: <MdColorLens size={50} color="orange" />,
    title: "Custom Themes",
    desc: [
      "Create a comfortable and personalized writing space by switching between light and dark modes.",
    ],
  },
];

function Features() {
  return (
    <>
      <div className={styles.mainHeading}>
        <h2>Features</h2>
      </div>

      <div className={styles.cardsContainer}>
        {featuresData.map((feature, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.topContent}>
              {feature.icon}
              <h2>{feature.title}</h2>
            </div>
            <div>
              {feature.desc.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
