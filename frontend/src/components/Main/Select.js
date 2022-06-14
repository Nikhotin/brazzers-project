import React from "react";
import styles from './Select.module.scss';

function Select({
  options = [],
  onSelect = () => {},
  withGroup = false,
  groupTip = '',
  disabled = false,
  placeholder = ''
}) {
  return (
    <div className={styles.selectContainer}>
      <select
        disabled={disabled}
        onChange={(e) => onSelect(e.target.value)}
        placeholder={placeholder}
      >
        <option selected disabled hidden>{placeholder}</option>
        { withGroup ?

          (groupTip !== '' ?
            options.filter(e => e.label === groupTip).map((el, idx) =>
              <optgroup label={el.label} key={`${el.label}${idx}`}>
                {el.options.map(elem =>
                  <option value={elem.value} key={elem.value}>
                    {elem.label}
                  </option>
                )}
              </optgroup>)

            : options.map((el, idx) =>
              <optgroup label={el.label} key={`${el.label}${idx}`}>
                {el.options.map(elem =>
                  <option value={elem.value} key={elem.value}>
                    {elem.label}
                  </option>
                )}
              </optgroup>

          )) : options.map(el =>
            <option value={el.value} key={el.value}>
              {el.label}
            </option>
          )
        }
      </select>
    </div>
  )
}

export default Select;

// options: [obj]
// if withGroup === true
// obj: { label: String, options: [childObj] }
// childObj: { value: String, label: String }

// if withGroup === false
// obj: { value: String, label: String }
