import React from 'react';
import styles from '../assets/css/components/Input.css';

const Input = (hint) => {
  return (
    <div className={styles.base_input_wrapper}>
      <input 
        className={styles.base_input} 
        placeholder={hint}/>
      <div className={styles.base_input_check_wrapper}>
        <div className={styles.base_input_check}></div>
      </div>
    </div>
  );
}

export default Input;