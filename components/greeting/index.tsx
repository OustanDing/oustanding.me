import styles from "styles/greeting/Greeting.module.css"; // Component styles

export default function Greeting() {
  return (
    <>
      <img className={styles.photo} src="/images/oustan.jpg" alt="Oustan" />
      <h1 className={styles.greeting}>Hi! I&apos;m Oustan 😄</h1>
    </>
  );
}
