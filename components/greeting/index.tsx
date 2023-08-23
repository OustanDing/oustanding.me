import { FC } from "react";
import styles from "styles/greeting/Greeting.module.css"; // Component styles

const Greeting: FC = () => {
  return (
    <>
      <img className={styles.photo} src="/images/oustan.jpg" alt="Oustan" />
      <h1 className={styles.greeting}>Hi, I&apos;m Oustan!</h1>
    </>
  );
};

export default Greeting;
