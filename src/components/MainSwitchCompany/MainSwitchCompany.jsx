import styles from "./MainSwitchCompany.module.css";
export function MainSwitchCompany() {
  return (
    <>
      <div
        className={styles.swtichCompanyWrap}
        style={{ backgroundImage: 'url("images/pic_feat_bg1.png")' }}
      >
        <h1>Переваги вибору нашої компанії</h1>

        <div className={styles.switchCardGroupe}>
          <div className={styles.switchCompanyCard}>
            <img src="images/feat1.png" alt=""></img>
            <p>
              <strong>Швидкий</strong>
              <br></br>зворотній зв'язок
            </p>
          </div>
          <div className={styles.switchCompanyCard}>
            <img src="images/feat2.png" alt=""></img>
            <p>
              <strong>Ціни нижче</strong>
              <br></br>ніж у конкурентів
            </p>
          </div>
          <div className={styles.switchCompanyCard}>
            <img src="images/feat3.png" alt=""></img>
            <p>
              <strong>48 об'єктів</strong>
              <br></br>завершено <br></br>за 2026 рік
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
