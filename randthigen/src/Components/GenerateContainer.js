import React from "react";
import styles from "./GenerateContainer.module.css";
const GenerateContainer = ({ customStyles }) => {
  const containerStyle = {
    alignSelf: "stretch",
    borderRadius: "var(--br-11xl)",
    background: "linear-gradient(180deg, #faeaca, #efcfa4)",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: "var(--padding-3xs) var(--padding-6xl) var(--padding-31xl)",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
    textAlign: "left",
    fontSize: "var(--font-size-sm)",
    color: "var(--color-black)",
    fontFamily: "var(--font-im-fell-english)"
  };
  return (
    <div className={styles.singlegeneratecontainer}>
      <div className={styles.generatecontainer}>
        <p className={styles.generatecontainer1}>GenerateContainer</p>
      </div>
      <button className={styles.saveParent}>
        <div className={styles.save}>Save</div>
        <img
          className={styles.materialSymbolssaveIcon}
          alt=""
          src="/materialsymbolssave.svg"
        />
      </button>
    </div>
  );
};

export default GenerateContainer;