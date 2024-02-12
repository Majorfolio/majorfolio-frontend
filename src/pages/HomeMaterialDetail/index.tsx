import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { HomeMaterialDetailContainer, ProfileWrapper } from './index.styles';
import MaterialDetailPreview from '../../components/home/MaterialDetailPreview';
import MaterialSellerProfile from '../../components/home/MaterialSellerProfile';
import MaterialDetailPost from '../../components/home/MaterialDetailPost';
import MaterialDetailInfo from '../../components/home/MaterialDetailInfo';
import AllDivider from '../../components/common/AllDivider';
import AllDividerThin from '../../components/common/AllDividerThin';
// import { getMaterialDetail } from '../../apis/materials';
import { MaterialDetail } from '../../components/home/Material/index.types';

const HomeMaterialDetail = () => {
  const [materialDetail, setMaterialDetail] = useState<null | MaterialDetail>(null);
  const { materialId } = useParams();

  useEffect(() => {
    if(materialId){
      // getMaterialDetail(parseInt(materialId, 10)).then((value) => setMaterialDetail(value));
      
      // getMaterialDetail(1).then((response) => {
      //   if (response.result) {
      //     setMaterialDetail(response.result);
      //   }
      // });

    }
    // console.log(materialDetail);
  }, []);

  return (
    <HomeMaterialDetailContainer>
      <MaterialDetailPreview />

      <ProfileWrapper>
        { materialDetail &&
          <MaterialSellerProfile nickname={materialDetail.nickName} hasReaction />
        }
      </ProfileWrapper>
      <AllDividerThin />

      <MaterialDetailPost 
        title='[과제] ALIDEA' 
        content='3학년 공업디자인학과 게임디자인과 기획 수업에서 작업했던 과제물이며, A+ 학점을 받았습니다.' 
      />
      
      <AllDivider />

      <MaterialDetailInfo />
    </HomeMaterialDetailContainer>
  )
}

export default HomeMaterialDetail