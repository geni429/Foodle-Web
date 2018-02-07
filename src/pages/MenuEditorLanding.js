import React, { Component } from 'react';
import { RoundButton, HeaderNav, LandingBanner, Description } from '../components';
import styles from '../assets/css/pages/MenuEditorLanding.css';

class MenuEditorLanding extends Component {
  render() {
    return (
      <div>
        {HeaderNav()}
        {LandingBanner()}
        <section id={styles.landing_section_wrapper}>
          {Description(
            '메뉴 기본정보',
            '메뉴의 이름, 가격, 설명, 원산지 정보, 태그 등을 등록합니다.',
            RoundButton(1, '계속하기'),
            false
          )}
          {Description(
            '미각을 시각화합니다',
            '메뉴를 잘 표현하는 사진을 등록해주세요.',
            RoundButton(0, '계속하기'),
            true
          )}
          {Description(
            '추가 옵션',
            '메뉴의 사이즈 추가 재료, 카테고리 등을 설정합니다',
            RoundButton(0, '계속하기'),
            true
          )}
          <div id={styles.landing_section_footer}>
            <div id={styles.left_side_btn}>
              {RoundButton(2, '미리보기')}
            </div>
            <div id={styles.right_side_btn}>
              {RoundButton(1, '등록')}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MenuEditorLanding;