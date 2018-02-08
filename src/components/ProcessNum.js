import React from 'react';
import classNames from 'classnames';
import styles from '../assets/css/components/ProcessNum.css';

const ProcessNum = (num, state) => {
  let disabled;
  if (state) disabled = styles.disabled;

  return (
    <div className={classNames(styles.process_num, disabled)}>
      <span className={styles.process_num_content}>{num}</span>
    </div>
  );
}

export default ProcessNum;