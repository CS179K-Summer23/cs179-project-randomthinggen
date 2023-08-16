import styles from "./GenerateContainer.module.css";
const GenerateContainer = () => {
  return (
    <div className={styles.singlegeneratecontainer}>
      <div className={styles.generatecontainer}>
        GenerateContainer
      </div>
      <button className={styles.savegeneratebutton}>
        <div className={styles.save}>Save</div>
        <img
          className={styles.materialSymbolssaveIcon}
          alt=""
          src="/materialsymbolssave.svg"
        />
      </button>
      <button className={styles.deletebutton}>
        <img className={styles.typcndeleteIcon} alt="" src="/typcndelete.svg" />
      </button>
    </div>
  );
};

export default GenerateContainer;
