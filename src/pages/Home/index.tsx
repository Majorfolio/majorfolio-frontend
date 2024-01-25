import React from 'react'

import * as S from './index.styles';
import AllDivider from '../../components/common/AllDivider';
import HomeCategoryButtonSection from '../../components/home/HomeCategoryButtonSection';
import HomeContentPageTitle from '../../components/home/HomeContentPageTitle';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';

const Home = () => {
  return (
    <S.HomeContainer>
      <HomeCategoryButtonSection />
      <AllDivider />

      <S.ContentPageContainer>
        <HomeContentPageTitle />

        <HomeTagCardTitle tag='new' />
        <S.CardWrapper>
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
        </S.CardWrapper>

        <HomeTagCardTitle tag='hot' />
        <S.CardWrapper>
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
        </S.CardWrapper>

        <HomeTagCardTitle />
        <S.CardWrapper>
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
        </S.CardWrapper>
      </S.ContentPageContainer>
    </S.HomeContainer>
  )
}

export default Home