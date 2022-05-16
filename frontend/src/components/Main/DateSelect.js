import React from "react";
import styles from "./DateSelect.module.scss"

function DateSelect(props) {
  return (
    <div className={styles.dataSelect}>
      <label>Выберите дату приёма</label>
      <input type="date" className={styles.input}/>
    </div>
  );
}

export default DateSelect;