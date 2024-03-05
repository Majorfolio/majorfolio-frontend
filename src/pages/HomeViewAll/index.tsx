import React, { useEffect, useRef, useState } from 'react';
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
import useAuthStore from '../../store/useAuthStore';
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
import { getArrayFromLocalStorage } from '../../components/home/LocalStorageUtils';
import { getMy } from '../../apis/member';
import HomeMaterialCardSkeleton from '../../components/home/HomeMaterialCardSkeleton';
import useRefreshPayload from '../../hooks/common/useRefreshPayload';

const HomeViewAll = () => {
  const [allMaterials, setAllMaterials] = useState<null | MaterialViewAll>(
    null,
  );
  const { category, tag } = useParams();
  let tagCardTitle: string;
  const authStore = useAuthStore((state) => state.accessToken);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const [isLastPage, setIsLastPage] = useState(false);
  const recentMaterials = getArrayFromLocalStorage('recent-materials');
  const recentMaterialViewAll: MaterialViewAll = {
    page: 1,
    materialResponseList: recentMaterials,
    end: true,
  };

  const navigate = useNavigate();
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();

  const refreshPayload = useRefreshPayload();

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

  const loadMoreMaterials = async () => {
    try {
      const nextPage = page + 1;
      let newMaterials: MaterialViewAll | null = null;

      switch (category) {
        case HOME_CATEGORY.ALL_UNIV.toString():
          if (tag === 'new') {
            newMaterials = await getAllUnivNewlyViewAll(nextPage, 10);
          } else if (tag === 'hot') {
            newMaterials = await getAllUnivBestViewAll(nextPage, 10);
          } else if (tag === 'undefined') {
            setAllMaterials(recentMaterialViewAll);
            setIsLastPage(true);
          }
          break;
        case HOME_CATEGORY.MY_UNIV.toString():
          if (tag === 'new' && authStore) {
            newMaterials = await getMyUnivNewlyViewAll(
              nextPage,
              10,
              authStore,
              refreshPayload,
            );
          } else if (tag === 'hot' && authStore) {
            newMaterials = await getMyUnivBestViewAll(
              nextPage,
              10,
              authStore,
              refreshPayload,
            );
          } else if (tag === 'undefined') {
            if (authStore) {
              getMy(authStore, refreshPayload).then(({ univName }) => {
                const recentMyUnivViewAll: MaterialViewAll = {
                  page: 1,
                  materialResponseList: recentMaterials
                    .filter((item) => item.univ === univName)
                    .slice(0, 10),
                  end: true,
                };
                setAllMaterials(recentMyUnivViewAll);
              });
            }
            setIsLastPage(true);
          }
          break;
        case HOME_CATEGORY.MY_MAJOR.toString():
          if (tag === 'new' && authStore) {
            newMaterials = await getMyMajorNewlyViewAll(
              nextPage,
              10,
              authStore,
              refreshPayload,
            );
          } else if (tag === 'hot' && authStore) {
            newMaterials = await getMyMajorBestViewAll(
              nextPage,
              10,
              authStore,
              refreshPayload,
            );
          } else if (tag === 'undefined') {
            if (authStore) {
              getMy(authStore, refreshPayload).then(({ major }) => {
                const recentMyMajorViewAll: MaterialViewAll = {
                  page: 1,
                  materialResponseList: recentMaterials
                    .filter((item) => item.major === major)
                    .slice(0, 10),
                  end: true,
                };
                setAllMaterials(recentMyMajorViewAll);
              });
            }
            setIsLastPage(true);
          }
          break;
        default:
          break;
      }

      if (newMaterials?.end) setIsLastPage(true);

      if (newMaterials != null) {
        setAllMaterials((prevMaterials: MaterialViewAll | null) => ({
          ...prevMaterials!,
          materialResponseList: [
            ...(prevMaterials?.materialResponseList || []),
            ...(newMaterials?.materialResponseList || []),
          ],
        }));
      }

      setPage(nextPage);
      setLoading(false);
    } catch (error) {
      // console.error('Error loading more materials:', error);
      setLoading(false);
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !loading && !isLastPage) {
      setLoading(true);
      // 다음 페이지의 자료 불러오기
      loadMoreMaterials();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading, allMaterials]);

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
            {allMaterials?.materialResponseList ? (
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
              })
            ) : (
              <>
                <HomeMaterialCardSkeleton isBig />
                <HomeMaterialCardSkeleton isBig />
                <HomeMaterialCardSkeleton isBig />
                <HomeMaterialCardSkeleton isBig />
                <HomeMaterialCardSkeleton isBig />
              </>
            )}
          </CardsWrapper>
          
          <div ref={bottomRef} style={{ height: '10px' }} />
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
