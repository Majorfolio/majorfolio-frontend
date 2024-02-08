import React, { useEffect, useState } from 'react'

import { CardWrapper, ContentPageContainer, HomeContainer } from './index.styles';
import AllDivider from '../../components/common/AllDivider';
import HomeCategoryButtonSection from '../../components/home/HomeCategoryButtonSection';
import HomeContentPageTitle from '../../components/home/HomeContentPageTitle';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';
import BottomBar from '../../components/common/BottomBar';
import { getAllUniv } from '../../apis/materials';

// TODO: 카드 콘텐츠 경우의 수 체크
import materials from '../../apis/materials-dummy'

interface Material {
  id: number;
  nickname: string;
  className: string;
  univ?: string | null;
  major?: string | null;
  semester?: string | null;
  professor?: string | null;
  like?: number | null;
}

interface MaterialCategory {
  "newUpload": Material[];
  "best": Material[];
  "latest": Material[];
}

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [homeMaterials, setHomeMaterials] = useState<null | MaterialCategory>(null);

  const updateCategory = (category: number) => {
    setCurrentCategory(category);
  }

  useEffect(() => {
    switch (currentCategory) {
      case 0:
        getAllUniv().then((value) => setHomeMaterials(value));
        break;
      default:
        break;
    }
  }, []);

  return (
    <HomeContainer>
      <HomeCategoryButtonSection currentCategory={currentCategory} updateCategory={updateCategory} />
      <AllDivider />

      <ContentPageContainer>
        <HomeContentPageTitle />

        <HomeTagCardTitle title='신규 등록 자료' tag='new' />
        <CardWrapper>
          { homeMaterials && homeMaterials.newUpload &&
            homeMaterials.newUpload.map((material: Material) => {
              return (
                <HomeMaterialCard 
                  key={material.id}
                  isBig={false} 
                  id={material.id} 
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
          {/* <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} /> */}
        </CardWrapper>

        <HomeTagCardTitle title='베스트 자료' tag='hot' />
        <CardWrapper>
          { homeMaterials && homeMaterials.best &&
            homeMaterials.best.map((material: Material) => {
              return (
                <HomeMaterialCard 
                  key={material.id}
                  isBig={false} 
                  id={material.id} 
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
          {/* <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} /> */}
        </CardWrapper>

        <HomeTagCardTitle title='최근에 본 자료' />
        <CardWrapper>
          {/* <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} />
          <HomeMaterialCard isBig={false} /> */}
        </CardWrapper>
      </ContentPageContainer>

      <BottomBar />
    </HomeContainer>
  )
}

export default Home