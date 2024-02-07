import React from 'react';

import { HomeMaterialDetailContainer, ProfileWrapper } from './index.styles';
import MaterialDetailPreview from '../../components/home/MaterialDetailPreview';
import MaterialSellerProfile from '../../components/home/MaterialSellerProfile';
import MaterialDetailPost from '../../components/home/MaterialDetailPost';
import MaterialDetailInfo from '../../components/home/MaterialDetailInfo';
import AllDivider from '../../components/common/AllDivider';
import AllDividerThin from '../../components/common/AllDividerThin';

const HomeMaterialDetail = () => {
  return (
    <HomeMaterialDetailContainer>
      <MaterialDetailPreview />
      <ProfileWrapper>
        <MaterialSellerProfile nickname='사용자 1' hasReaction />
      </ProfileWrapper>
      <AllDividerThin />
      <MaterialDetailPost title='[과제] ALIDEA' content='3학년 공업디자인학과 게임디자인과 기획 수업에서 작업했던 과제물이며, A+ 학점을 받았습니다.' />
      <AllDivider />
      <MaterialDetailInfo />
    </HomeMaterialDetailContainer>
  )
}

export default HomeMaterialDetail