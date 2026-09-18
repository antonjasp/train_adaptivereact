import styles from './MainJobStep.module.css';
export function MainJobStep() {
  return (
    <>
      <div className={styles.jobStepWrapper}>
        <h1>Як ми працюємо</h1>
        <div className={styles.jobStepContainer}>
          <div className={styles.step1} id={styles.step11}>
            <div className={styles.stepIcon}>
              <img src="images/Group 7.png" alt=""></img>
            </div>
            <p>Безкоштовна консультація</p>
          </div>
          <div className={styles.arrow} id={styles.step12}>
            <div className={styles.stepIcon}>
              <img src="images/arrow.png" alt=""></img>
            </div>
          </div>
          <div className={styles.step2} id={styles.step13}>
            <div className={styles.stepIcon}>
              <img src="images/Group 8.png" alt=""></img>
            </div>
            <p className="text-step">Виїзд інженера і консультація</p>
          </div>
          <div className={styles.arrow2} id={styles.step14}>
            <div className={styles.stepIcon}>
              <img src="images/arrow.png" alt=""></img>
            </div>
          </div>

          <div className={styles.step1} id={styles.step15}>
            <div className={styles.stepIcon}>
              <img src="images/Group 9.png" alt=""></img>
            </div>
            <p>Підготовка ескізного проекту і кошторису</p>
          </div>
          <div className={styles.arrow} id={styles.step16}>
            <div className={styles.stepIcon}>
              <img src="images/arrow.png" alt=""></img>
            </div>
          </div>
          <div className={styles.step2} id={styles.step17}>
            <div className={styles.stepIcon}>
              <img src="images/Group 10.png" alt=""></img>
            </div>
            <p>Підписання договору</p>
          </div>
          <div className={styles.arrow2} id={styles.step18}>
            <div className={styles.stepIcon}>
              <img src="images/arrow.png" alt=""></img>
            </div>
          </div>
          <div className={styles.step1} id={styles.step19}>
            <div className={styles.stepIcon}>
              <img src="images/Group 11.png" alt=""></img>
            </div>
            <p>Виконання робіт</p>
          </div>
          <div className={styles.arrow} id={styles.step110}>
            <div className={styles.stepIcon}>
              <img src="images/arrow.png" alt=""></img>
            </div>
          </div>
          <div className={styles.step2} id={styles.step111}>
            <div className={styles.stepIcon}>
              <img src="images/Group 12.png" alt=""></img>
            </div>
            <p>Пусконалагоджувальні роботи</p>
          </div>
          <div className={styles.arrow2} id={styles.step112}>
            <div className={styles.stepIcon}>
              <img src="images/arrow.png" alt=""></img>
            </div>
          </div>
          <div className={styles.step1} id={styles.step113}>
            <div className={styles.stepIcon}>
              <img src="images/Group 13.png" alt=""></img>
            </div>
            <p>Сдача проекту</p>
          </div>
        </div>
      </div>
    </>
  );
}
