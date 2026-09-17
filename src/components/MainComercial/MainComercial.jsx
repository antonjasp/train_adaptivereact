import styles from "./MainComercial.module.css";
export function MainComercial() {
  return (
    <>
      <div
        className={styles.comercial}
        style={{ backgroundImage: 'url("images/pic_free1.png")' }}
      >
        <h1>Комерційна пропозиція за 24 години!</h1>
        <div className={styles.buttonGroupeComercial}>
          <button id={styles.loadpricebtn}>завантажити прайс-лист</button>
          <button id={styles.getCount}>отримати розрахунок вартості</button>
        </div>
      </div>
    </>
  );
}
