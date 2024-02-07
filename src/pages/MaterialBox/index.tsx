import React from 'react'

import * as S from './index.styles';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle'
import HomeMaterialCard from '../../components/home/HomeMaterialCard'
import TapMenu from '../../components/common/TapMenu';

const MaterialBox = () => {
  return (
    <S.MaterialBoxContainer>
      <TapMenu />

      <S.CardTitleWrapper>
        <HomeTagCardTitle title='결제 대기' isViewAll />
      </S.CardTitleWrapper>
      <S.CardsWrapper>
        {/* <HomeMaterialCard />
        <HomeMaterialCard />
        <HomeMaterialCard /> */}
      </S.CardsWrapper>
      
      <S.CardTitleWrapper>
        <HomeTagCardTitle title='결제 완료' isViewAll />
      </S.CardTitleWrapper>
      <S.CardsWrapper>
        {/* <HomeMaterialCard />
        <HomeMaterialCard />
        <HomeMaterialCard /> */}
      </S.CardsWrapper>
    </S.MaterialBoxContainer>
  )
}

export default MaterialBox