import styles from "./MainWrapperGeneral.module.css";
export function MainWrapperGeneral() {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: 'url("/images/da1.png")' }}
      >
        <div className={styles.headlines}>
          <div className={styles.wrapperHeadline1}>
            Системи вентиляції та кондиціонування
          </div>
          <div className={styles.wrapperHeadline2}>
            проектування, монтаж, обслуговування
          </div>
        </div>
        <div className={styles.wrapperHeadline3}>Безкоштовно за 48 годин</div>
        <div className={styles.wrapperNomaney}>
          <div className={styles.itemNomoney}>
            <img src="/images/Group 2.png" alt=""></img>
            <div className={styles.caption}>Виїзд інженера</div>
          </div>
          <div className={styles.itemNomoney}>
            <img src="images/Group 3.png" alt=""></img>
            <div className={styles.caption}>Ескізний проект</div>
          </div>
          <div className={styles.itemNomoney}>
            <img src="images/Group 1.png" alt=""></img>
            <div className={styles.caption}>Кошторис</div>
          </div>
        </div>
      </div>
    </>
  );
}
