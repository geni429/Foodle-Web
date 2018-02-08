import React, { Component } from 'react';
import { HeaderNav, RoundButton, StoreEditProcess } from '../components';
import storeEditLandingImage from '../assets/resource/store-edit-landing-img.png';
import storeEditLandingImage2x from '../assets/resource/store-edit-landing-img@2x.png';
import storeEditLandingImage3x from '../assets/resource/store-edit-landing-img@3x.png';
import styles from '../assets/css/pages/StoreEditorLanding.css';

class StoreEditorLanding extends Component {
  render() {
    return (
      <div>
        {HeaderNav()}
        <section id={styles.landing_section_wrapper}>
          <div id={styles.landing_article_header}>
            <div>당신의 멋진</div>
            <div>
              <span className={styles.bold}>푸드트럭</span>을 공개해주세요
            </div>
          </div>
          <article id={styles.landing_article_wrapper}>
            {StoreEditProcess(
              '기본 정보 먼저 입력해주세요',
              '푸드트럭의 이름, 설명, 태그, 연락처 등을 입력해주세요',
              RoundButton(1, '계속하기'),
              1,
              false
            )}
            {StoreEditProcess(
              '위치를 알려주세요',
              '최근 푸드트럭의 위치를 알려주세요.\n스마트폰용 푸들을 통해 푸드트럭의 위치를 업데이트 할 수 있습니다.',
              RoundButton(0, '계속하기'),
              2,
              true
            )}
            {StoreEditProcess(
              '비주얼을 추가합시다',
              '당신의 푸드트럭을 잘 표현할 수 있는 사진과 설명을 입력해주세요.\n메인 및 여러 곳에 사용됩니다.',
              RoundButton(0, '계속하기'),
              3,
              true
            )}
          </article>
          <div id={styles.landing_image_wrapper}>
            <img 
              id={styles.landing_image} 
              src={storeEditLandingImage}
              srcset={storeEditLandingImage2x + ' 2x,' + storeEditLandingImage3x + ' 3x'}/>
          </div>
        </section>
      </div>
    );
  }
}

export default StoreEditorLanding;