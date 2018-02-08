import React from 'react';
import classNames from 'classnames';
import ProcessNum from './ProcessNum';
import styles from '../assets/css/components/StoreEditProcess.css';

const StoreEditProcess = (header, content, component, num, state) => {
  let disabled;
  if (state) disabled = styles.disabled;

  return (
    <div className={styles.process_wrapper}>
      <div className={styles.process_num_wrapper}>{ProcessNum(num, state)}</div>
      <div className={styles.process_description}>
        <div className={classNames(styles.description_header, disabled)}>
          {header}
        </div>
        <div className={classNames(styles.description_content, disabled)}>
          {content}
        </div>
        {component}
      </div>
      <hr />
    </div>
  );
}

export default StoreEditProcess;