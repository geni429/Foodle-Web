import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './RoundButton.css';

const RoundButton = (type, content) => {
  let btnStyle;
  let contentStyle = styles.default_content;

  switch(type) {
    case 0:
      btnStyle = styles.btn_full_gray;
      break;
    case 1:
      btnStyle = styles.btn_full_red;
      break;
    case 2:
      btnStyle = styles.btn_border_red;
      contentStyle = styles.red_content; 
      break;
    default:
      btnStyle = styles.btn_full_gray;
  }

  return (
    <div className={classNames(styles.round_btn_wrapper, btnStyle)}>
      <span className={contentStyle}>{content}</span>
    </div>
  );
}

RoundButton.propTypes = {
  type: PropTypes.number,
  content: PropTypes.string
}

export default RoundButton;