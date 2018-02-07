import React from 'react';
import styles from '../assets/css/components/LandingBanner.css';

const LandingBanner = () => {
  return (
    <header id={styles.landing_banner_wrapper}>
      <span id={styles.landing_banner_content}>여러분의 음식을 세상에 알려주세요</span>
    </header>
  );
}

export default LandingBanner;