import React from 'react'

import { CardTitleWrapper, CardsWrapper, MaterialBoxContainer, PageContainer } from './index.styles';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle'
import HomeMaterialCard from '../../components/home/HomeMaterialCard'
import TapMenu from '../../components/common/TapMenu';
import BottomBar from '../../components/common/BottomBar';

const MaterialBox = () => {
  return (
    <PageContainer>
      <MaterialBoxContainer>
        <TapMenu />

        <CardTitleWrapper>
          <HomeTagCardTitle title='결제 대기' isViewAll />
        </CardTitleWrapper>
        <CardsWrapper>
          {/* <HomeMaterialCard />
          <HomeMaterialCard />
          <HomeMaterialCard /> */}
        </CardsWrapper>
        
        <CardTitleWrapper>
          <HomeTagCardTitle title='결제 완료' isViewAll />
        </CardTitleWrapper>
        <CardsWrapper>
          {/* <HomeMaterialCard />
          <HomeMaterialCard />
          <HomeMaterialCard /> */}
        </CardsWrapper>
      </MaterialBoxContainer>

      <BottomBar />
    </PageContainer>
  )
}

export default MaterialBox