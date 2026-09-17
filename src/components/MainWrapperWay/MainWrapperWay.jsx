import styles from "./MainWrapperWay.module.css";
export function MainWrapperWay() {
  return (
    <>
      <div className={styles.wrapperWay}>
        <div className={styles.wayjobHeader}>Наші напрямки</div>
        <div className={styles.wayjobContainer}>
          <div className={styles.wayjobCard}>
            <div className={styles.wayjobCardElipse}>
              <img src="images/icon_serv_3.png" alt=""></img>
            </div>
            <div className={styles.wayjobCardText1}>
              Автоматизація інженерних систем
            </div>
          </div>
          <div className={styles.wayjobCard}>
            <div className={styles.wayjobCardElipse}>
              <img src="images/icon_serv_1.png" alt=""></img>
            </div>
            <div className={styles.wayjobCardText1}>Вентиляція</div>
          </div>
          <div className={styles.wayjobCard}>
            <div className={styles.wayjobCardElipse}>
              <img src="images/icon_serv_2.png" alt=""></img>
            </div>
            <div className={styles.wayjobCardText1}>Кондиціонування</div>
          </div>
        </div>
      </div>
    </>
  );
}
