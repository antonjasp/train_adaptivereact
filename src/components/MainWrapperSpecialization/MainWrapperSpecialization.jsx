import styles from "./MainWrapperSpecialization.module.css";
export function MainWrapperSpecialization() {
  return (
    <>
      <div className={styles.specializeWrapper}>
        <div className={styles.specializeHeadline}>
          Ми спеціалізуємося на наступних видах об'єктів
        </div>
        <div className={styles.specializeContainer}>
          <div className={styles.itemSpecialize}>
            <img src="images/obj1.jpg" alt=""></img>
            <div className={styles.specializeCaption}>
              Кафе, ресторани, кальянні
            </div>
          </div>
          <div className={styles.itemSpecialize}>
            <img src="images/obj2.jpg" alt=""></img>
            <div className={styles.specializeCaption}>
              Виробництва, цеха, склади
            </div>
          </div>
          <div className={styles.itemSpecialize}>
            <img src="images/obj3.jpg" alt=""></img>
            <div className={styles.specializeCaption}>
              Медичні заклади, стоматології
            </div>
          </div>
          <div className={styles.itemSpecialize}>
            <img src="images/obj4.jpg" alt=""></img>
            <div className={styles.specializeCaption}>
              Магазини, торгові приміщення
            </div>
          </div>
          <div className={styles.itemSpecialize}>
            <img src="images/obj5.jpg" alt=""></img>
            <div className={styles.specializeCaption}>
              Особисті будинки і квартири
            </div>
          </div>
          <div className={styles.itemSpecialize}>
            <img src="images/obj6.jpg" alt=""></img>
            <div className={styles.specializeCaption}>
              Фітнес клуби, спортивні зали
            </div>
          </div>
          <div className={styles.itemSpecialize}>
            <img src="images/obj7.jpg" alt=""></img>
            <div className={styles.specializeCaption}>
              Оффіси, гостиниці, готелі, хостели{" "}
            </div>
          </div>
          <div className={styles.itemSpecialize}>
            <img src="images/obj8.jpg" alt=""></img>
            <div className={styles.specializeCaption}>
              Інші обєкти будь-якого призначення
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
