import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  CardTitleWrapper,
  CardsWrapper,
  ViewAllContainer,
} from './index.styles';
import { MainLeftContainer, MainRightContainer, PageContainer } from '../../components/common/GlobalStyle/index.styles';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';
import BottomBar from '../../components/common/BottomBar';
import Material, {
  MaterialViewAll,
} from '../../components/home/Material/index.types';
import {
  getAllUnivBestViewAll,
  getAllUnivNewlyViewAll,
  getMyMajorBestViewAll,
  getMyMajorNewlyViewAll,
  getMyUnivBestViewAll,
  getMyUnivNewlyViewAll,
} from '../../apis/materials';
import HOME_CATEGORY from '../../components/home/HomeCategory/index.types';
import useAuthStore from '../../store/authStore';
import useModal from '../../hooks/common/useModal';
import { SecondaryTopbar } from '../../components/common/TopBar';
import {
  ArrowBackDefaultIcon,
  CartDefaultIcon,
  NotificationDefaultIcon,
} from '../../assets/icons';
import Text from '../../components/common/Text';
import Modal from '../../components/common/Modal';
import MainLeftBoxTop from '../../components/common/MainLeftBoxTop';
import MainLeftBoxBottom from '../../components/common/MainLeftBoxBottom';

const HomeViewAll = () => {
  const [allMaterials, setAllMaterials] = useState<null | MaterialViewAll>(
    null,
  );
  const { category, tag } = useParams();
  let tagCardTitle: string;
  const authStore = useAuthStore((state) => state.accessToken);

  const navigate = useNavigate();
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();

  switch (tag) {
    case 'new':
      tagCardTitle = '신규 등록 자료';
      break;
    case 'hot':
      tagCardTitle = '베스트 자료';
      break;
    default:
      tagCardTitle = '최근에 본 자료';
      break;
  }
  if (category === HOME_CATEGORY.LIKE.toString()) {
    tagCardTitle = '최근 좋아요순';
  } else if (category === HOME_CATEGORY.BOOKMARK.toString()) {
    tagCardTitle = '최근 북마크순';
  }

  useEffect(() => {
    switch (category) {
      case HOME_CATEGORY.ALL_UNIV.toString(): // 0
        if (tag === 'new') {
          getAllUnivNewlyViewAll(1, 50).then((value) => setAllMaterials(value));
        } else if (tag === 'hot') {
          getAllUnivBestViewAll(1, 50).then((value) => setAllMaterials(value));
        }
        break;
      case HOME_CATEGORY.MY_UNIV.toString(): // 1
        if (tag === 'new' && authStore) {
          getMyUnivNewlyViewAll(1, 50, authStore).then((value) =>
            setAllMaterials(value),
          );
        } else if (tag === 'hot' && authStore) {
          getMyUnivBestViewAll(1, 50, authStore).then((value) =>
            setAllMaterials(value),
          );
        }
        break;
      case HOME_CATEGORY.MY_CLASS.toString(): // 2
        if (tag === 'new' && authStore) {
          getMyMajorNewlyViewAll(1, 50, authStore).then((value) =>
            setAllMaterials(value),
          );
        } else if (tag === 'hot' && authStore) {
          getMyMajorBestViewAll(1, 50, authStore).then((value) =>
            setAllMaterials(value),
          );
        }
        break;
      default:
        break;
    }
  }, []);

  return (
    <PageContainer>
      <MainLeftContainer>
        <MainLeftBoxTop />
        <MainLeftBoxBottom />
      </MainLeftContainer>

      <MainRightContainer>
        <SecondaryTopbar
          transition={
            <button type="button" onClick={() => navigate(-1)} aria-label='prev'>
              <ArrowBackDefaultIcon />
            </button>
          }
          title={
            <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
              모두보기
            </Text>
          }
          icons={[
            <button
              type="button"
              onClick={() =>
                activateModal('TO_BE_UPDATED', {
                  primaryAction: () => {},
                })
              }
              aria-label='cart'
            >
              <CartDefaultIcon />
            </button>,
            <button
              type="button"
              onClick={() =>
                activateModal('TO_BE_UPDATED', {
                  primaryAction: () => {},
                })
              }
              aria-label='alarm'
            >
              <NotificationDefaultIcon />
            </button>,
          ]}
        />
        <ViewAllContainer>
          <CardTitleWrapper>
            <HomeTagCardTitle
              title={tagCardTitle}
              tag={tag}
              category={0}
              isViewAll
            />
          </CardTitleWrapper>
          <CardsWrapper>
            {allMaterials?.materialResponseList &&
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
        <Modal
          modalRef={modalRef}
          category={modalCategory}
          onPrimaryAction={closePrimarily}
          onSecondaryAction={closeSecondarily}
        />
      </MainRightContainer>
    </PageContainer>
  );
};

export default HomeViewAll;
