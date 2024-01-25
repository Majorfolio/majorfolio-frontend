import React from 'react'

import * as S from './index.styles'
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle'
import HomeMaterialCard from '../../components/home/HomeMaterialCard'

const HomeViewAll = () => {
  return (
    <S.ViewAllContainer>
      <S.CardTitleWrapper>
        <HomeTagCardTitle tag='hot' isViewAll />
      </S.CardTitleWrapper>
      <S.CardsWrapper>
        <HomeMaterialCard />
        <HomeMaterialCard />
        <HomeMaterialCard />
      </S.CardsWrapper>
    </S.ViewAllContainer>
  )
}

export default HomeViewAll