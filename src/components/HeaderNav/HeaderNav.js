import React from 'react';
import styles from './HeaderNav.css';

const HeaderNav = () => {
  return (
    <header id={styles.header_nav}>
      <div className={styles.header_div}>
        <span className={styles.header_content}>Foodle</span>
      </div>
      <div className={styles.header_div}>
        <span className={styles.header_content}>로그인 / 회원가입</span>
      </div>
    </header>
  );
}

export default HeaderNav;