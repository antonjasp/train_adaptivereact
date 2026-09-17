import styles from "./Header.module.css";
export function Header() {
  return (
    <>
      <header>
        <div className={styles.logoHeader}>
          <ul>
            <li className={styles.aws}>AWS</li>
            <li className={styles.air}>Air Workshop</li>
          </ul>
        </div>
        <div className={styles.contactHeader}>
          <a href="tel:+380960272443">
            <img src="images/contact.png" alt="" />
          </a>
          <ul>
            <li>+38(096)-027-24-43</li>
            <li>Пн-Нд 10:00-19:00</li>
            <li>м.Дніпро</li>
          </ul>
        </div>
      </header>
    </>
  );
}
