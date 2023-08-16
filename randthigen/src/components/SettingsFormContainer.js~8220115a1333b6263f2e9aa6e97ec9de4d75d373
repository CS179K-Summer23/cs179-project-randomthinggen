import { FormControlLabel, Radio } from "@mui/material";
import styles from "./SettingsFormContainer.module.css";
const SettingsFormContainer = () => {
  return (
    <div className={styles.settingscontainer}>
      <h1 className={styles.settings}>Settings</h1>
      <button className={styles.generatebutton}>
        <div className={styles.generate}>Generate</div>
        <img className={styles.mdimagicIcon} alt="" src="/mdimagic.svg" />
      </button>
      <h2 className={styles.genre}>Genre:</h2>
      <div className={styles.genreradiobuttons}>
        <FormControlLabel
          label="Fantasy"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
        <FormControlLabel
          label="Sci-Fi"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
      </div>
      <h2 className={styles.generate1}>Generate:</h2>
      <div className={styles.generateradiobuttons}>
        <FormControlLabel
          label="Person"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
        <FormControlLabel
          label="Place"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
      </div>
      <FormControlLabel
        className={styles.generateradiobuttons1}
        label="Thing"
        labelPlacement="end"
        control={<Radio color="primary" size="medium" />}
      />
      <h2 className={styles.ai}>AI:</h2>
      <div className={styles.airadiobuttons}>
        <FormControlLabel
          label="On"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
        <FormControlLabel
          label="Off"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
      </div>
      <div className={styles.aisettings}>
        <div className={styles.aiinput}>
          Height:
          <div className={styles.aisettingtextbox}>
          Tall
          </div>
        </div>
        <div className={styles.aiinput}>
          Build:
          <div className={styles.aisettingtextbox}>
          Thin
          </div>
        </div>
        <div className={styles.aiinput}>
          Job:
          <div className={styles.aisettingtextbox}>
          Welder
          </div>
        </div>
        <div className={styles.aiinput}>
          Hobbies:
          <div className={styles.aisettingtextbox}>
              Reading, Writing
            </div>
          </div>
        </div>
      </div>
  );
};

export default SettingsFormContainer;
