import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {
  ContentPageContainer,
  HomeContainer,
  NoMaterialWrapper,
} from './index.styles';
import AllDivider from '../../components/common/AllDivider';
import HomeCategoryButtonSection from '../../components/home/HomeCategoryButtonSection';
import HomeContentPageTitle from '../../components/home/HomeContentPageTitle';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';
import BottomBar, { Path } from '../../components/common/BottomBar';
import Material, {
  MaterialCategory,
} from '../../components/home/Material/index.types';
import HOME_CATEGORY from '../../components/home/HomeCategory/index.types';
import BannerContainer from '../../components/common/BannerContainer';
import { getAllUniv, getMyMajor, getMyUniv } from '../../apis/materials';
import Banner from '../../components/common/Banner';
import HomeMaterialCardWrapper from '../../components/home/HomeMaterialCardWrapper';
import { getArrayFromLocalStorage } from '../../components/home/LocalStorageUtils';
import useAuthStore, { AuthLevel } from '../../store/useAuthStore';
import { getMy } from '../../apis/member';
import { PrimaryTopbar } from '../../components/common/TopBar';
import {
  AppLogoIcon,
  CartDefaultIcon,
  NotificationDefaultIcon,
} from '../../assets/icons';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/common/Modal';
import HomeMaterialCardSkeleton from '../../components/home/HomeMaterialCardSkeleton';
import useRefreshPayload from '../../hooks/common/useRefreshPayload';
import MainLeftBoxTop from '../../components/common/MainLeftBoxTop';
import MainLeftBoxBottom from '../../components/common/MainLeftBoxBottom';
import MaterialSellerProfile from '../../components/home/MaterialSellerProfile';
import Text from '../../components/common/Text';

// TODO: 카드 콘텐츠 경우의 수 체크
// import materials from '../../apis/materials-dummy'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(
    HOME_CATEGORY.ALL_UNIV,
  );
  const [homeMaterials, setHomeMaterials] = useState<null | MaterialCategory>(
    null,
  );
  const authStore = useAuthStore((state) => state.accessToken);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();

  const materials = getArrayFromLocalStorage('recent-materials');
  const [recentMaterials, setRecentMaterials] = useState<Material[]>([]);
  let recentMyUniv: Material[];
  let recentMyMajor: Material[];

  const updateCategory = (category: number) => {
    setCurrentCategory(category);
  };

  const refreshPayload = useRefreshPayload();

  const accessToken = useAuthStore((state) => state.accessToken);
  const authLevel = useAuthStore((state) => state.authLevel);

  const [myNickName, setMyNickName] = useState<string>('');

  const showNoMaterialText =
    !loading &&
    homeMaterials?.newUpload &&
    homeMaterials?.best &&
    homeMaterials.newUpload.length === 0 &&
    homeMaterials.best.length === 0;

  useEffect(() => {
    const asyncEffect = async () => {
      if (authLevel === AuthLevel.Member && accessToken) {
        const { nickName } = await getMy(accessToken, refreshPayload);
        setMyNickName(nickName);
      }
    };
    asyncEffect();
  }, []);

  useEffect(() => {
    setLoading(true);

    switch (currentCategory) {
      case HOME_CATEGORY.ALL_UNIV: // 0
        getAllUniv().then((value) => {
          setHomeMaterials(value);
          setLoading(false);
        });
        setTitle('모든 대학교');
        setRecentMaterials(materials.slice(0, 5));
        break;
      case HOME_CATEGORY.MY_UNIV: // 1
        if (authStore) {
          getMyUniv(authStore, refreshPayload).then((value) => {
            setHomeMaterials(value);
            setLoading(false);
          });
          getMy(authStore, refreshPayload).then(({ univ }) => {
            setTitle(univ);
            recentMyUniv = materials
              .filter((item) => item.univ === univ)
              .slice(0, 5);
            setRecentMaterials(recentMyUniv);
          });
        }
        break;
      case HOME_CATEGORY.MY_MAJOR: // 2
        if (authStore) {
          getMyMajor(authStore, refreshPayload).then((value) => {
            setHomeMaterials(value);
            setLoading(false);
          });
          getMy(authStore, refreshPayload).then(({ major }) => {
            setTitle(major);
            recentMyMajor = materials
              .filter((item) => item.major === major)
              .slice(0, 5);
            setRecentMaterials(recentMyMajor);
          });
        }
        break;
      case HOME_CATEGORY.MY_CLASS: // 3
        activateModal('TO_BE_UPDATED', {
          primaryAction: () => {},
        });
        setHomeMaterials(null);
        setLoading(false);
        break;
      default:
        break;
    }
  }, [currentCategory]);

  return (
    <>
      <PrimaryTopbar
        title={
          <button
            type="button"
            onClick={() => {
              navigate('/');
            }}
            aria-label="prev"
          >
            <AppLogoIcon />
          </button>
        }
        icons={[
          <button
            type="button"
            onClick={() =>
              activateModal('TO_BE_UPDATED', {
                primaryAction: () => {},
              })
            }
            aria-label="cart"
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
            aria-label="alarm"
          >
            <NotificationDefaultIcon />
          </button>,
        ]}
      />
      <HomeContainer>
        <BannerContainer>
          <Banner
            titleText={<>사전예약하고<br/>3가지 혜택 받자!</>}
            subtitleText='헤택을 확인해보세요!'
            titleColor='gray/white'
            subtitleColor='sub_color/indigo/s'
            backgroundColor='main_color/blue_p'
            bannerIcon='assets/images/banner/landing-bell.png'
            onClick={() => {
              navigate(`/landing`);
            }}
          />
          <Banner 
            titleText={<>현재 PDF 파일만<br/>이용할 수 있어요</>}
            subtitleText='업로드, 다운로드에 참고하세요'
            titleColor='gray/gray900'
            subtitleColor='gray/gray500'
            backgroundColor='gray/grayBG'
            bannerIcon='assets/images/banner/folder.png'
            onClick={() => {}}            
          />
        </BannerContainer>

        <HomeCategoryButtonSection
          currentCategory={currentCategory}
          updateCategory={updateCategory}
        />
        <AllDivider />

        {!loading &&
        homeMaterials?.newUpload &&
        homeMaterials?.best &&
        (homeMaterials.newUpload.length !== 0 ||
          homeMaterials.best.length !== 0 ||
          recentMaterials.length !== 0) ? (
          <ContentPageContainer>
            <HomeContentPageTitle title={title} />

            {homeMaterials?.newUpload.length !== 0 && (
              <>
                <HomeTagCardTitle
                  title="신규 등록 자료"
                  tag="new"
                  category={currentCategory}
                />
                <HomeMaterialCardWrapper>
                  {homeMaterials?.newUpload.map((material: Material) => {
                    return (
                      <HomeMaterialCard
                        key={material.id}
                        isBig={false}
                        id={material.id}
                        memberId={material.memberId}
                        profileImage={material.profileImage}
                        nickName={material.nickName}
                        className={material.className}
                        univ={material.univ}
                        major={material.major}
                        semester={material.semester}
                        professor={material.professor}
                        like={material.like}
                        header={
                          <MaterialSellerProfile
                            nickName={material.nickName}
                            hasReaction={false}
                            memberId={material.memberId}
                            profileImage={material.profileImage}
                          />
                        }
                      />
                    );
                  })}
                </HomeMaterialCardWrapper>
              </>
            )}

            {homeMaterials?.best.length !== 0 && (
              <>
                <HomeTagCardTitle
                  title="베스트 자료"
                  tag="hot"
                  category={currentCategory}
                />
                <HomeMaterialCardWrapper>
                  {homeMaterials?.best.map((material: Material) => {
                    return (
                      <HomeMaterialCard
                        key={material.id}
                        isBig={false}
                        id={material.id}
                        memberId={material.memberId}
                        profileImage={material.profileImage}
                        nickName={material.nickName}
                        className={material.className}
                        univ={material.univ}
                        major={material.major}
                        semester={material.semester}
                        professor={material.professor}
                        like={material.like}
                        header={
                          <MaterialSellerProfile
                            nickName={material.nickName}
                            hasReaction={false}
                            memberId={material.memberId}
                            profileImage={material.profileImage}
                          />
                        }
                      />
                    );
                  })}
                </HomeMaterialCardWrapper>
              </>
            )}

            {recentMaterials.length !== 0 && (
              <>
                <HomeTagCardTitle
                  title="최근에 본 자료"
                  category={currentCategory}
                />
                <HomeMaterialCardWrapper>
                  {recentMaterials.map((material: Material) => {
                    return (
                      <HomeMaterialCard
                        key={material.id}
                        isBig={false}
                        id={material.id}
                        memberId={material.memberId}
                        profileImage={material.profileImage}
                        nickName={material.nickName}
                        className={material.className}
                        univ={material.univ}
                        major={material.major}
                        semester={material.semester}
                        professor={material.professor}
                        like={material.like}
                        header={
                          <MaterialSellerProfile
                            nickName={material.nickName}
                            hasReaction={false}
                            memberId={material.memberId}
                            profileImage={material.profileImage}
                          />
                        }
                      />
                    );
                  })}
                </HomeMaterialCardWrapper>
              </>
            )}
          </ContentPageContainer>
        ) : (
          <div>
            {/* Skeleton */}
            {loading ? (
              <ContentPageContainer>
                <HomeContentPageTitle title={title} />
                <HomeTagCardTitle
                  title="신규 등록 자료"
                  tag="new"
                  category={currentCategory}
                />
                <HomeMaterialCardWrapper>
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                </HomeMaterialCardWrapper>
                <HomeTagCardTitle
                  title="베스트 자료"
                  tag="hot"
                  category={currentCategory}
                />
                <HomeMaterialCardWrapper>
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                </HomeMaterialCardWrapper>
                <HomeTagCardTitle
                  title="최근에 본 자료"
                  category={currentCategory}
                />
                <HomeMaterialCardWrapper>
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                  <HomeMaterialCardSkeleton isBig={false} />
                </HomeMaterialCardWrapper>
              </ContentPageContainer>
            ) : null}

            {/* No Material */}
            {showNoMaterialText ? (
              <ContentPageContainer>
                <HomeContentPageTitle title={title} />
                <NoMaterialWrapper>
                  <Text size={16} lineHeight="sm" color="gray/gray400">
                    보여줄 자료가 없어요
                  </Text>
                </NoMaterialWrapper>
              </ContentPageContainer>
            ) : null}
          </div>
        )}
      </HomeContainer>

      <BottomBar currentPath={Path.Home} />

      <Modal
        modalRef={modalRef}
        category={modalCategory}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />
    </>
  );
};

export default Home;
