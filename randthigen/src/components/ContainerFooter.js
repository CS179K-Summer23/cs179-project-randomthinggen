import styles from "./Footer.module.css";
const ContainerFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.frameParent}>
        <div className={styles.testParent}>
          <div className={styles.test}>Test</div>
          <div className={styles.addressParent}>
            <div className={styles.test}>Address</div>
            <div className={styles.test}>{`Email : `}</div>
            <div className={styles.test}>{`Téléphone : `}</div>
            <div className={styles.test}>test</div>
          </div>
        </div>
        <div className={styles.testParent}>
          <h1 className={styles.usefulLinks}>Useful links</h1>
          <div className={styles.addressParent}>
            <div className={styles.test}>Home</div>
            <div className={styles.test}>Saved</div>
            <div className={styles.test}>History</div>
            <div className={styles.test}>Chat</div>
            <div className={styles.test}>Profile</div>
          </div>
        </div>
      </div>
      <img className={styles.bimagicIcon} alt="" src="/bimagic.svg" />
    </footer>
  );
};

export default ContainerFooter;
