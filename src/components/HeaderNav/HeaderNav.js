import React from 'react';
import styles from './HeaderNav.css';

const HeaderNav = () => {
  return (
    <header id={styles.header_nav}>
      <div>
        <span>Foodle</span>
      </div>
      <div>
        <span>로그인/회원가입</span>
      </div>
    </header>
  );
}

export default HeaderNav;