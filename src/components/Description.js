import React from 'react';
import classNames from 'classnames';
import styles from '../assets/css/components/Description.css';

const Description = (header, content, component, state) => {
  let disabled;
  if (state) disabled = styles.disabled;

  return (
    <div className={styles.description_wrapper}>
      <div className={classNames(styles.description_header, disabled)}>
        {header}
      </div>
      <div className={classNames(styles.description_content, disabled)}>
        {content}
      </div>
      {component}
      <hr className={styles.div_line} />
    </div>
  );
}

export default Description;