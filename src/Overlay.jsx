import styles from './style.module.css';

export default function Overlay({ ruby, amber, pearl, sapphire }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={`${styles.informationHeader} ${styles.border}`}>
            SPORTS WEEK
          </div>
        </div>
        <div className={`${styles.housesInformationHeader} ${styles.border}`}>
          <div className={styles.housesContainer}>
            <div className={`${styles.r} ${styles.house}`}>
              <div className={styles.flexBetween}>
                <div>R</div>
                <div>{ruby}</div>
              </div>
            </div>
            <div className={`${styles.a} ${styles.house}`}>
              <div className={styles.flexBetween}>
                <div>A</div>
                <div>{amber}</div>
              </div>
            </div>
            <div className={`${styles.p} ${styles.house}`}>
              <div className={styles.flexBetween}>
                <div>P</div>
                <div>{pearl}</div>
              </div>
            </div>
            <div className={`${styles.s} ${styles.house}`}>
              <div className={styles.flexBetween}>
                <div>S</div>
                <div>{sapphire}</div>
              </div>
            </div>
          </div>
        </div>
        <footer className={`${styles.informationHeader} ${styles.border}`}>
          Monday
        </footer>
      </div>
    </>
  );
}
