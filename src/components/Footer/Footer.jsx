import styles from "./Footer.module.css";
export function Footer() {
  return (
    <>
      <footer style={{ backgroundImage: 'url("images/pic_foot_bg1.png")' }}>
        <div class={styles.contactCard}>
          <img src="images/c-icn1.png" alt=""></img>
          <p>
            Наш instagram: <br></br>airwshop
          </p>
        </div>
        <div class={styles.contactCard}>
          <a href="tel:+380960272443">
            <img src="images/c-icn2.png" alt=""></img>
          </a>
          <p>
            Телефонуйте <br></br>
            096-027-24-43<br></br>
            Пн-Нд 10:00-19:00
          </p>
        </div>
        <div class={styles.contactCard}>
          <img src="images/c-icn3.png" alt=""></img>
          <p>
            Ми працюємо<br></br> по м.Дніпро та області
          </p>
        </div>
      </footer>
    </>
  );
}
