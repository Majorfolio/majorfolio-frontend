import React from 'react'

import { CardTitleWrapper, CardsWrapper, ViewAllContainer } from './index.styles'
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle'
import HomeMaterialCard from '../../components/home/HomeMaterialCard'
import BottomBar from '../../components/common/BottomBar'

const HomeViewAll = () => {
  return (
    <>
      <ViewAllContainer>
        <CardTitleWrapper>
          <HomeTagCardTitle tag='hot' isViewAll />
        </CardTitleWrapper>
        <CardsWrapper>
          <HomeMaterialCard />
          <HomeMaterialCard />
          <HomeMaterialCard />
        </CardsWrapper>

      </ViewAllContainer>
      <BottomBar />    
    </>
  )
}

export default HomeViewAll