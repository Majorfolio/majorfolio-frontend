import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { getSellerMaterial, getSellerProfile } from '../../../apis/seller';
import Column from '../../../components/common/Column';
import Text from '../../../components/common/Text';
import AllTagBig from '../../../components/common/AllTagBig';
import { MyProfileStatisticsNumber } from '../../../components/home/MaterialPostStatisticsNumber';
import { ArrowBackDefaultIcon } from '../../../assets/icons';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';
import {
  StyledPortrait,
  StyledProfileIntro,
  StyledProfileSection,
  StyledTagSection,
  StyledWelcomeSection,
} from '../../My/MyMain/index.styles';
import usePagination from '../../../hooks/common/usePagination';
import {
  CardTitleWrapper,
  CardsWrapper,
  ViewAllContainer,
} from '../../HomeViewAll/index.styles';
import HomeTagCardTitle from '../../../components/home/HomeTagCardTitle';
import Material from '../../../components/home/Material/index.types';
import HomeMaterialCard from '../../../components/home/HomeMaterialCard';
import MaterialSellerProfile from '../../../components/home/MaterialSellerProfile';
import HomeMaterialCardSkeleton from '../../../components/home/HomeMaterialCardSkeleton';
import Row from '../../../components/common/Row';

interface SellerProfile {
  nickName: string;
  univName: string;
  major: string;
  image_url: string;
  upload: number;
  sell: number;
  follower: number;
}

interface SellerMaterial {
  page: number;
  sellList: {
    id: number;
    memberId: number;
    imageUrl: string;
    nickname: string;
    name: string;
    univ: string;
    major: string;
    semester: string;
    professor: string;
    like: number;
  }[];
}

const initialProfile = {
  nickName: '',
  univName: '',
  major: '',
  image_url: '',
  upload: 0,
  sell: 0,
  follower: 0,
};

export default function Seller() {
  const { sellerId } = useParams();
  const [sellerMaterials, setSellerMaterials] = useState<SellerMaterial>({
    page: 0,
    sellList: [],
  });
  const [sellerProfile, setSellerProfile] = useState<null | SellerProfile>(
    initialProfile,
  );
  const navigate = useNavigate();

  const { nickName, univName, major, image_url, upload, sell, follower } =
    sellerProfile!;

  useEffect(() => {
    if (!sellerId) return;
    getSellerProfile(Number(sellerId)).then((data: SellerProfile) => {
      setSellerProfile(data);
    });
  }, []);

  const {
    isLoading,
    nextPage,
    hasLastPageReached,
    bottomRef,
    canLoadMore,
    startLoading,
    finishLoading,
    reachLastPage,
  } = usePagination();

  const welcomeText = (
    <Column>
      <Text color="gray/gray900" size={22} weight="bold" lineHeight="lg">
        {nickName}
      </Text>
    </Column>
  );

  const tags = (
    <>
      <AllTagBig text={univName} color="blue" />
      <AllTagBig text={`본 전공 - ${major}`} color="blue" />
    </>
  );
  const countInfoRow = (
    <MyProfileStatisticsNumber
      upload={upload}
      follower={follower}
      sell={sell}
    />
  );

  const tagCardTitle = '판매중인 자료';

  const loadMoreMaterials = async () => {
    const data = (await getSellerMaterial(
      nickName,
      nextPage,
      10,
    )) as SellerMaterial & { end: boolean | undefined };

    setSellerMaterials((materials) => ({
      ...materials,
      sellList: [...materials.sellList, ...data.sellList],
    }));

    if (data.end) {
      reachLastPage();
    }
  };

  const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && canLoadMore) {
      startLoading();
      await loadMoreMaterials();
      finishLoading();
    }
  };

  useEffect(() => {
    if (!nickName) return () => {};

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
  }, [
    isLoading,
    hasLastPageReached,
    canLoadMore,
    nextPage,
    startLoading,
    finishLoading,
    reachLastPage,
    sellerMaterials,
    nickName,
  ]);

  if (!sellerId) {
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
            판매자 정보
          </Text>
        }
      />
      <StyledPageContainer>
        <StyledProfileSection>
          <StyledProfileIntro>
            <StyledWelcomeSection>
              <Row justify="space-between" pt={32}>
                {welcomeText}
                <StyledPortrait />
              </Row>
              <StyledTagSection>{tags}</StyledTagSection>
            </StyledWelcomeSection>
          </StyledProfileIntro>
          {countInfoRow}
        </StyledProfileSection>
        <ViewAllContainer>
          <CardTitleWrapper>
            <HomeTagCardTitle title={tagCardTitle} isViewAll />
          </CardTitleWrapper>
          <CardsWrapper>
            {sellerMaterials?.sellList &&
              sellerMaterials?.sellList.map((material) => {
                return (
                  <HomeMaterialCard
                    key={material.id}
                    isBig
                    id={material.id}
                    memberId={material.memberId}
                    imageUrl={material.imageUrl}
                    nickname={material.nickname}
                    className={material.name}
                    univ={material.univ}
                    major={material.major}
                    semester={material.semester}
                    professor={material.professor}
                    like={material.like}
                    header={
                      <MaterialSellerProfile
                        nickname={material.nickname}
                        hasReaction={false}
                        memberId={material.memberId}
                      />
                    }
                    onClick={() => {}}
                  />
                );
              })}
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
      </StyledPageContainer>
    </>
  );
}
