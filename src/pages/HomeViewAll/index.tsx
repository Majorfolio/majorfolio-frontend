import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CardTitleWrapper, CardsWrapper, PageContainer, ViewAllContainer } from './index.styles'
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle'
import HomeMaterialCard from '../../components/home/HomeMaterialCard'
import BottomBar from '../../components/common/BottomBar'
import Material, { MaterialViewAll } from '../../components/home/Material/index.types'
import { getAllUnivBestViewAll, getAllUnivNewlyViewAll, getMyMajorBestViewAll, getMyMajorNewlyViewAll, getMyUnivBestViewAll, getMyUnivNewlyViewAll } from '../../apis/materials'
import HOME_CATEGORY from '../../components/home/HomeCategory/index.types'
import useAuthStore from '../../store/authStore'

const HomeViewAll = () => {
  const [allMaterials, setAllMaterials] = useState<null | MaterialViewAll>(null);
  const { category, tag } = useParams();
  let tagCardTitle: string;
  const authStore = useAuthStore((state) => state.accessToken) ;

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
  if (category === (HOME_CATEGORY.LIKE).toString()) {
    tagCardTitle = "최근 좋아요순";
  } else if (category === (HOME_CATEGORY.BOOKMARK).toString()) {
    tagCardTitle = "최근 북마크순";
  }

  useEffect(() => {
    switch (category) {
      case HOME_CATEGORY.ALL_UNIV.toString(): // 0
        if (tag === "new") {
          getAllUnivNewlyViewAll(1, 30).then((value) => setAllMaterials(value));
        } else if (tag === "hot") {
          getAllUnivBestViewAll(1, 30).then((value) => setAllMaterials(value));
        }
        break;
      case HOME_CATEGORY.MY_UNIV.toString(): // 1
        if (tag === "new" && authStore) {
          getMyUnivNewlyViewAll(1, 30, authStore).then((value) => setAllMaterials(value));
        } else if (tag === "hot" && authStore) {
          getMyUnivBestViewAll(1, 30, authStore).then((value) => setAllMaterials(value));
        }
        break;
      case HOME_CATEGORY.MY_CLASS.toString(): // 2
        if (tag === "new" && authStore) {
          getMyMajorNewlyViewAll(1, 30, authStore).then((value) => setAllMaterials(value));
        } else if (tag === "hot" && authStore) {
          getMyMajorBestViewAll(1, 30, authStore).then((value) => setAllMaterials(value));
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
          { allMaterials?.materialResponseList &&
            allMaterials.materialResponseList.map((material: Material) => {
              return (
                <HomeMaterialCard 
                  key={material.id}
                  isBig
                  id={material.id} 
                  memberId={material.memberId}
                  imageUrl={material.imageUrl}
                  nickname={material.nickname} 
                  className={material.className} 
                  univ={material.univ} 
                  major={material.major} 
                  semester={material.semester} 
                  professor={material.professor} 
                  like={material.like} 
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