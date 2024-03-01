import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  CardTitleWrapper,
  CardsWrapper,
  PageContainer,
  ViewAllContainer,
} from './index.styles';
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

const HomeViewAll = () => {
  const [allMaterials, setAllMaterials] = useState<null | MaterialViewAll>(
    null,
  );
  const { category, tag } = useParams();
  let tagCardTitle: string;
  const authStore = useAuthStore((state) => state.accessToken);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

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

  const loadMoreMaterials = async () => {
    try {
      const nextPage = page + 1;
      let newMaterials: MaterialViewAll | null;
  
      switch (category) {
        case HOME_CATEGORY.ALL_UNIV.toString():
          if (tag === 'new') {
            newMaterials = await getAllUnivNewlyViewAll(nextPage, 10);
            setAllMaterials(newMaterials);
          } else if (tag === 'hot') {
            newMaterials = await getAllUnivBestViewAll(nextPage, 10);
            setAllMaterials(newMaterials);
          }
          break;
        case HOME_CATEGORY.MY_UNIV.toString():
          if (tag === 'new' && authStore) {
            newMaterials = await getMyUnivNewlyViewAll(nextPage, 10, authStore);
            setAllMaterials(newMaterials);
          } else if (tag === 'hot' && authStore) {
            newMaterials = await getMyUnivBestViewAll(nextPage, 10, authStore);
            setAllMaterials(newMaterials);
          }
          break;
        case HOME_CATEGORY.MY_CLASS.toString():
          if (tag === 'new' && authStore) {
            newMaterials = await getMyMajorNewlyViewAll(nextPage, 10, authStore);
            setAllMaterials(newMaterials);
          } else if (tag === 'hot' && authStore) {
            newMaterials = await getMyMajorBestViewAll(nextPage, 10, authStore);
            setAllMaterials(newMaterials);
          }
          break;
        default:
          break;
      }
  
      // setAllMaterials((prevMaterials) => ({
      //   ...prevMaterials.materialResponseList,
      //   ...newMaterials.materialResponseList,
      // }));
  
      setPage(nextPage);
      setLoading(false);
    } catch (error) {
      console.error('Error loading more materials:', error);
      setLoading(false);
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      setLoading(true);
      // 다음 페이지의 자료 불러오기
      loadMoreMaterials();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if(bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading, allMaterials]);

  /*
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
  */

  return (
    <PageContainer>
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

        <div ref={bottomRef} style={{ height: '10px' }} />
      </ViewAllContainer>
      <BottomBar />
      <Modal
        modalRef={modalRef}
        category={modalCategory}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />
    </PageContainer>
  );
};

export default HomeViewAll;
