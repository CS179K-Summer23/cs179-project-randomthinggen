import styles from "./SavedResultsContainer.module.css";
const SavedResultsContainer = () => {
  return (
    <div className={styles.savedResultsParent}>
      <div className={styles.savedResults}>Saved Results</div>
      <button className={styles.downloadbutton}>
        <div className={styles.download}>{`Download `}</div>
        <img
          className={styles.materialSymbolsdownloadIcon}
          alt=""
          src="/materialsymbolsdownload.svg"
        />
      </button>
      <div className={styles.savedsinglegeneratecontainer}>
        <div className={styles.savedsinglegenerate}>SavedSingleGenerate</div>
      </div>
      <div className={styles.savedsinglegeneratecontainer1}>
        <div className={styles.savedsinglegenerate}>
          <p className={styles.savedsinglegenerate1}>SavedSingleGenerate</p>
          <p className={styles.savedsinglegenerate1}>SavedSingleGenerate</p>
        </div>
      </div>
    </div>
  );
};

export default SavedResultsContainer;