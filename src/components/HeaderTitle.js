import React from 'react';
import styles from '../assets/css/components/HeaderTitle.css';

const HeaderTitle = (title) => {
  return (
    <div className={styles.header_title_wrapper}>
      <pre className={styles.header_title}>{title}</pre>
    </div>
  );
}

export default HeaderTitle;