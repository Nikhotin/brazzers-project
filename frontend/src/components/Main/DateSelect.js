import React, { useState } from "react";
import styles from "./DateSelect.module.scss";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateSelect(props) {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.dateSelect}>
      <div className={styles.inputContainer}>
        <DatePicker
          className={styles.inputContainer}
          selected={startDate}
          onChange={
            (date) => setStartDate(date)
          }
        />
      </div>
    </div>
  );
}

export default DateSelect;