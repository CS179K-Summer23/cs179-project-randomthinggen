import React, { useState } from "react";
import SavedResultsContainer from "../components/SavedResultsContainer";
import SettingsFormContainer from "../components/SettingsFormContainer";
import GenerateContainer from "../components/GenerateContainer";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./LandingPage.module.css";
import generatecontainer from "../components/GenerateContainer.module.css";;
const LandingPage = () => {
  const [generatedContainers, setGeneratedContainers] = useState([]);
  const handleGenerateButtonClick = () => {
    setGeneratedContainers((prevContainers) => [
      ...prevContainers,
      <GenerateContainer 
      key={prevContainers.length} 
      className={generatecontainer.generatecontainer}
      />,
    ]);
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.fantasy}>
        <div className={styles.tabcontainer}>
          <div className={styles.selectionmenu}>
            <div className={styles.randomthinggen}>RandomThingGen</div>
            <div className={styles.selectionmenuChild} />
            <div className={styles.saved}>Saved</div>
            <div className={styles.selectionmenuChild} />
            <div className={styles.saved}>History</div>
            <div className={styles.selectionmenuChild} />
            <div className={styles.saved}>Chat</div>
            <div className={styles.selectionmenuChild} />
            <div className={styles.saved}>Analytics</div>
            <div className={styles.selectionmenuChild} />
            <div className={styles.profile}>Profile</div>
          </div>
          <button className={styles.loginbutton}>
            <div className={styles.login}>Login</div>
            <img
              className={styles.materialSymbolsloginIcon}
              alt=""
              src="/materialsymbolslogin.svg"
            />
          </button>
        </div>
        <SavedResultsContainer />
        <SettingsFormContainer onGenerateButtonClick={handleGenerateButtonClick}/>
        <div className={styles.generationscontainer}>
          {generatedContainers}
        </div>
      </div>
      <ContainerFooter />
      <footer className={styles.copyright}>
        <div className={styles.privacyPolicyParent}>
          <div className={styles.saved}>Privacy Policy</div>
          <div className={styles.saved}>Terms of use</div>
        </div>
        <div className={styles.saved}>Test</div>
      </footer>
    </div>
  );
};

export default LandingPage;
