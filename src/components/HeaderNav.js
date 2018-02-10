import React from 'react';
import foodleTextLogo from '../assets/resource/foodle-text-logo.png';
import searchIcon from '../assets/resource/search.png';
import restaurantLogo from '../assets/resource/restaurant.png';
import styles from '../assets/css/components/HeaderNav.css';

const HeaderNav = (userName) => {
  return (
    <header id={styles.header_nav_wrapper}>
      <div id={styles.header_nav}>
        <div className={styles.header_div}>
          <div className={styles.header_left_content}>
            <img id={styles.foodle_text_logo} src={foodleTextLogo}/>
            <img id={styles.search_logo} src={searchIcon}/>
            <input id={styles.search_input}/>
          </div>
        </div>
        <div className={styles.header_div}>
          <div className={styles.header_right_content}>
            {headerNavButton('홈', () => {})}
            {headerNavButton('보관함', () => {})}
            {headerNavButton('알림', () => {})}
            {headerNavButton('더보기', () => {})}
            <img id={styles.user_profile_img}/>
            <span className={styles.header_nav_btn}>{`${userName} 님`}</span>
            <img id={styles.restaurant_logo} src={restaurantLogo}/>
          </div>
        </div>
      </div>
    </header>
  );
}

const headerNavButton = (where, event) => {
  return (
    <span className={styles.header_nav_btn} onClick={event}>{where}</span>
  );
}

export default HeaderNav;