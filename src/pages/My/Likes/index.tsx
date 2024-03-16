import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMyLikes } from '../../../apis/my';
import useAuthStore, { AuthLevel } from '../../../store/useAuthStore';
import useModal from '../../../hooks/common/useModal';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { ArrowBackDefaultIcon } from '../../../assets/icons';
import {
  CardTitleWrapper,
  CardsWrapper,
  ViewAllContainer,
} from '../../HomeViewAll/index.styles';
import HomeTagCardTitle from '../../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../../components/home/HomeMaterialCard';
import HomeMaterialCardSkeleton from '../../../components/home/HomeMaterialCardSkeleton';
import Text from '../../../components/common/Text';
import MaterialSellerProfile from '../../../components/home/MaterialSellerProfile';
import useRequireAuth from '../../../hooks/common/useRequireAuth';
import EmptyMaterialWrapper from '../../../components/common/EmptyContentWrapper';

interface MyBookmarkType {
  materialId: number;
  nickName: string;
  profileUrl: string;
  className: string;
  univ: string;
  major: string;
  type: 'pdf';
  totalRecommend: number;
}

interface MyMaterialListType {
  page: number;
  myMaterialList: MyBookmarkType[];
}

export default function Bookmarks() {
  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Member,
    AuthLevel.Member,
  );
  const [allMaterials, setAllMaterials] = useState<null | MyMaterialListType>(
    null,
  );
  const tagCardTitle = '최근 좋아요순';

  const accessToken = useAuthStore((state) => state.accessToken)!;
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);
  const [hasLastPageReached, setHasLastPageReached] = useState(false);

  const canLoadMore = !isLoading && !hasLastPageReached;

  const navigate = useNavigate();
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();

  const refreshPayload = useRefreshPayload();

  const loadMoreMaterials = async () => {
    const nextPage = page + 1;
    let newMaterials: MyMaterialListType | null = null;
    const data = await getMyLikes(nextPage, 10, accessToken, refreshPayload);
    const { code, result, status } = data;

    newMaterials = result;

    if (status === 404 || code === 8001 || status === 500) {
      setHasLastPageReached(true);
      return;
    }
    // if (newMaterials?.end) setHasLastPageReached(true);

    if (newMaterials != null) {
      setAllMaterials((prevMaterials: MyMaterialListType | null) => ({
        ...prevMaterials!,
        myMaterialList: [
          ...(prevMaterials?.myMaterialList || []),
          ...(newMaterials?.myMaterialList || []),
        ],
      }));
    }

    setPage(nextPage);
  };

  const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading && !hasLastPageReached) {
      setIsLoading(true);
      // 다음 페이지의 자료 불러오기
      loadMoreMaterials();
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [bottomRef.current]);

  useEffect(() => {
    const asyncEffect = async () => {
      setIsLoading(true);
      // 다음 페이지의 자료 불러오기
      loadMoreMaterials();
      setIsLoading(false);
    };
    asyncEffect();
  }, []);

  if (!isAuthLevelSatisfied) {
    return <span />;
  }

  return (
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate(-1)} aria-label="prev">
            <ArrowBackDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            좋아요한 자료
          </Text>
        }
      />

      {!(
        allMaterials?.myMaterialList && allMaterials.myMaterialList.length
      ) && (
        <EmptyMaterialWrapper>
          <Text size={16} lineHeight="sm" color="gray/gray400">
            좋아요한 자료가 없어요.
          </Text>
        </EmptyMaterialWrapper>
      )}

      {allMaterials?.myMaterialList && allMaterials.myMaterialList.length && (
        <ViewAllContainer>
          <CardTitleWrapper>
            <HomeTagCardTitle title={tagCardTitle} tag="new" isViewAll />
          </CardTitleWrapper>
          <CardsWrapper>
            {allMaterials?.myMaterialList &&
              allMaterials.myMaterialList.map(
                (material: MyBookmarkType, index) => {
                  return (
                    <HomeMaterialCard
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      isBig
                      nickName={material.nickName}
                      imageUrl={material.profileUrl}
                      className={material.className}
                      univ={material.univ}
                      major={material.major}
                      like={material.totalRecommend}
                      id={0}
                      memberId={0}
                      semester="23-2"
                      header={
                        <MaterialSellerProfile
                          nickName={material.nickName}
                          hasReaction={false}
                        />
                      }
                      onClick={() =>
                        navigate(`/assignment/${material.materialId}/detail`)
                      }
                    />
                  );
                },
              )}
            {isLoading && (
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
      )}
    </>
  );
}
