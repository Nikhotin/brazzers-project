import React from "react";
import styles from './Submit.module.scss';

function Submit(props) {
  return (
    <div className={styles.submitContainer}>
      <textarea
        className={styles.symptoms}
        placeholder="Опишите симптомы (рекомендуется)"
      >
      </textarea>
      <div className={styles.submit}>
        <p>Записаться</p>
      </div>
    </div>
  );
}

export default Submit;