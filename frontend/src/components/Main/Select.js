import React from "react";
import styles from './Select.module.scss';

function Select(props) {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.select}>
        <option disabled selected>Выберите {props.value}</option>
        {props.array.map((el) => <option key={el[props.selector]}>{el[props.selector]}</option>)}
      </select>
    </div>
  );
}

export default Select;