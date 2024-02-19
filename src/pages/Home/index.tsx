import React, { useEffect, useState } from 'react'

import { CardWrapper, ContentPageContainer, HomeContainer, PageContainer } from './index.styles';
import AllDivider from '../../components/common/AllDivider';
import HomeCategoryButtonSection from '../../components/home/HomeCategoryButtonSection';
import HomeContentPageTitle from '../../components/home/HomeContentPageTitle';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';
import BottomBar from '../../components/common/BottomBar';
import Material, { MaterialCategory } from '../../components/home/Material/index.types';
import HOME_CATEGORY from '../../components/home/HomeCategory/index.types';
import BannerContainer from '../../components/common/BannerContainer';
import { getAllUniv } from '../../apis/materials';
import Banner from '../../components/common/Banner';
import HomeMaterialCardWrapper from '../../components/home/HomeMaterialCardWrapper';
import { getArrayFromLocalStorage } from '../../components/home/HomeMaterialCard/localStorageUtils';

// TODO: 카드 콘텐츠 경우의 수 체크
// import materials from '../../apis/materials-dummy'

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState(HOME_CATEGORY.ALL_UNIV);
  const [homeMaterials, setHomeMaterials] = useState<null | MaterialCategory>(null);
  const materials = getArrayFromLocalStorage('recent-materials');

  const updateCategory = (category: number) => {
    setCurrentCategory(category);
  }

  useEffect(() => {
    switch (currentCategory) {
      case HOME_CATEGORY.ALL_UNIV: // 0
        getAllUniv().then((value) => setHomeMaterials(value));
        break;
      case HOME_CATEGORY.MY_UNIV: // 1
        setHomeMaterials(null);
        break;
      case HOME_CATEGORY.MY_MAJOR: // 2
        setHomeMaterials(null);
        break;
      default:
        break;
    }
  }, [currentCategory]);


  return (
    <PageContainer>
      <HomeContainer>
        <BannerContainer>
          <Banner/>
          <Banner/>
          <Banner/>
        </BannerContainer>

        <HomeCategoryButtonSection currentCategory={currentCategory} updateCategory={updateCategory} />
        <AllDivider />

        <ContentPageContainer>
          <HomeContentPageTitle />

          <HomeTagCardTitle title='신규 등록 자료' tag='new' category={currentCategory} />
          <HomeMaterialCardWrapper>
            { homeMaterials?.newUpload &&
              homeMaterials.newUpload.map((material: Material) => {
                return (
                  <HomeMaterialCard 
                    key={material.id}
                    isBig={false} 
                    id={material.id} 
                    memberId={material.memberId}
                    imageUrl={material.imageUrl}
                    nickname={material.nickname} 
                    className={material.className} 
                    univ={material.univ ?? null} 
                    major={material.major ?? null} 
                    semester={material.semester ?? null} 
                    professor={material.professor ?? null} 
                    like={material.like ?? null} 
                  />
                );
              })}
          </HomeMaterialCardWrapper>

          <HomeTagCardTitle title='베스트 자료' tag='hot' category={currentCategory} />
          <HomeMaterialCardWrapper>
            { homeMaterials?.best &&
              homeMaterials.best.map((material: Material) => {
                return (
                  <HomeMaterialCard 
                    key={material.id}
                    isBig={false} 
                    id={material.id} 
                    memberId={material.memberId}
                    imageUrl={material.imageUrl}
                    nickname={material.nickname} 
                    className={material.className} 
                    univ={material.univ ?? null} 
                    major={material.major ?? null} 
                    semester={material.semester ?? null} 
                    professor={material.professor ?? null} 
                    like={material.like ?? null} 
                  />
                );
              })}
          </HomeMaterialCardWrapper>

          <HomeTagCardTitle title='최근에 본 자료' category={currentCategory} />
          <CardWrapper>
            { materials &&
              materials.map((material: Material) => {
                return (
                  <HomeMaterialCard 
                    key={material.id}
                    isBig={false} 
                    id={material.id} 
                    memberId={material.memberId}
                    imageUrl={material.imageUrl}
                    nickname={material.nickname} 
                    className={material.className} 
                    univ={material.univ ?? null} 
                    major={material.major ?? null} 
                    semester={material.semester ?? null} 
                    professor={material.professor ?? null} 
                    like={material.like ?? null} 
                  />
                );
              })}
          </CardWrapper>
        </ContentPageContainer>
      </HomeContainer>

      <BottomBar />
    </PageContainer>
  )
}

export default Home