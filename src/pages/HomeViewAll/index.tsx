import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CardTitleWrapper, CardsWrapper, PageContainer, ViewAllContainer } from './index.styles'
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle'
import HomeMaterialCard from '../../components/home/HomeMaterialCard'
import BottomBar from '../../components/common/BottomBar'
import Material, { MaterialViewAll } from '../../components/home/Material/index.types'
import { getAllUnivBestViewAll, getAllUnivNewlyViewAll } from '../../apis/materials'
import HomeCategory from '../../components/home/HomeCategory/index.types'

const HomeViewAll = () => {
  const [allMaterials, setAllMaterials] = useState<null | MaterialViewAll>(null);
  const { category, tag } = useParams();
  let tagCardTitle: string;

  switch (tag) {
    case "new":
      tagCardTitle = "신규 등록 자료";
      break;
    case "hot":
      tagCardTitle = "베스트 자료";
      break;
    default:
      tagCardTitle = "최근에 본 자료";
      break;
  }
  if (category === (HomeCategory.LIKE).toString()) {
    tagCardTitle = "최근 좋아요순";
  } else if (category === (HomeCategory.BOOKMARK).toString()) {
    tagCardTitle = "최근 북마크순";
  }

  useEffect(() => {
    switch (category) {
      case HomeCategory.ALLUNIV.toString(): // 0
        if (tag === "new") {
          getAllUnivNewlyViewAll(1, 10).then((value) => setAllMaterials(value));
        } else if (tag === "hot") {
          getAllUnivBestViewAll(1, 10).then((value) => setAllMaterials(value));
        }
        break;
      default:
        break;
    }
  }, []);

  return (
    <PageContainer>
      <ViewAllContainer>
        <CardTitleWrapper>
          <HomeTagCardTitle title={tagCardTitle} tag={tag} category={0} isViewAll />
        </CardTitleWrapper>
        <CardsWrapper>
          { allMaterials && allMaterials.materialResponseList &&
            allMaterials.materialResponseList.map((material: Material) => {
              return (
                <HomeMaterialCard 
                  key={material.id}
                  isBig
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
        </CardsWrapper>
      </ViewAllContainer>

      <BottomBar />    
    </PageContainer>
  )
}

export default HomeViewAll