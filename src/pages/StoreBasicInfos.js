import React, { Component } from 'react';
import { HeaderNav, HeaderTitle, Description, Input, RoundButton } from '../components';
import styles from '../assets/css/pages/StoreBasicInfos.css';

class StoreBasicInfos extends Component {
  render() {
    return (
      <div>
        {HeaderNav()}
        <section id={styles.basic_infos_section}>          
          {HeaderTitle('어떤 푸드트럭을\n운영하시나요?')}
          {Description(
            '푸드트럭 이름',
            '',
            Input('예) 모모네 타코야끼'),
            false
          )}
          {Description(
            '푸드트럭 한줄 프로모션',
            '',
            Input('예) 10년 경력의 모모가 운영하는 월드클래스 타코야끼!'),
            false
          )}
          {Description(
            '푸드트럭 상세 설명',
            '',
            Input('예) 모모네 타코야끼는 2004년 부산에서 시작하여 전국 12개 지사...'),
            false
          )}
          {Description(
            '푸드트럭 태그',
            '',
            Input('예) #타코야끼, #맛있다, #홍대, #데이트코스, #동글동글'),
            false
          )}
          {Description(
            '인스타그램',
            '',
            Input('예) @foodle_lab'),
            false
          )}
          <div id={styles.section_footer}>
            <div id={styles.right_side_btn}>
              {RoundButton(1, '다음')}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default StoreBasicInfos;