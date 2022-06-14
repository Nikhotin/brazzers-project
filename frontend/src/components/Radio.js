import React from "react";
import styles from './Radio.module.scss';
import { Radio } from 'antd';

function RadioButton({
  options = [],
  onSelect = () => {},
  withGroup = false,
  groupTip = ''
}) {
  return (
    <div className={styles.radioContainer}>
      <Radio.Group
        className={styles.checkContainer}
        onChange={(e) => onSelect(e.target.value)}
      >
        { withGroup ?
          options.filter(el => el.class === groupTip).map(elem => <Radio value={elem.value} key={`value${elem.value}`}> {elem.label} </Radio>)
          : options.map(el => <Radio value={el.value} key={`value${el.value}`}> {el.label} </Radio>)
        }
      </Radio.Group>
    </div>
  );
}

export default RadioButton;