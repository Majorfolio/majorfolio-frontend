import React from 'react'

import { CardWrapper, ContentPageContainer, HomeContainer } from './index.styles';
import AllDivider from '../../components/common/AllDivider';
import HomeCategoryButtonSection from '../../components/home/HomeCategoryButtonSection';
import HomeContentPageTitle from '../../components/home/HomeContentPageTitle';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';
import BottomBar from '../../components/common/BottomBar';

const Home = () => {
  return (
    <HomeContainer>
      <HomeCategoryButtonSection />
      <AllDivider />

      <ContentPageContainer>
        <HomeContentPageTitle />

        <HomeTagCardTitle tag='new' />
        <CardWrapper>
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
        </CardWrapper>

        <HomeTagCardTitle tag='hot' />
        <CardWrapper>
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
        </CardWrapper>

        <HomeTagCardTitle />
        <CardWrapper>
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
        </CardWrapper>
      </ContentPageContainer>

      <BottomBar />
    </HomeContainer>
  )
}

export default Home