import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {
  CardWrapper,
  ContentPageContainer,
  HomeContainer,
  PageContainer,
} from './index.styles';
import AllDivider from '../../components/common/AllDivider';
import HomeCategoryButtonSection from '../../components/home/HomeCategoryButtonSection';
import HomeContentPageTitle from '../../components/home/HomeContentPageTitle';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';
import BottomBar from '../../components/common/BottomBar';
import Material, {
  MaterialCategory,
} from '../../components/home/Material/index.types';
import HOME_CATEGORY from '../../components/home/HomeCategory/index.types';
import BannerContainer from '../../components/common/BannerContainer';
import { getAllUniv, getMyMajor, getMyUniv } from '../../apis/materials';
import Banner from '../../components/common/Banner';
import HomeMaterialCardWrapper from '../../components/home/HomeMaterialCardWrapper';
import { getArrayFromLocalStorage } from '../../components/home/LocalStorageUtils';
import useAuthStore from '../../store/authStore';
import { getMy } from '../../apis/member';
import { PrimaryTopbar } from '../../components/common/TopBar';
import {
  AppLogoIcon,
  CartDefaultIcon,
  NotificationDefaultIcon,
} from '../../assets/icons';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/common/Modal';

// TODO: 카드 콘텐츠 경우의 수 체크
// import materials from '../../apis/materials-dummy'

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState(
    HOME_CATEGORY.ALL_UNIV,
  );
  const [homeMaterials, setHomeMaterials] = useState<null | MaterialCategory>(
    null,
  );
  const materials = getArrayFromLocalStorage('recent-materials');
  const authStore = useAuthStore((state) => state.accessToken);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const { modalRef, onToggle } = useModal();

  const updateCategory = (category: number) => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    switch (currentCategory) {
      case HOME_CATEGORY.ALL_UNIV: // 0
        getAllUniv().then((value) => setHomeMaterials(value));
        setTitle('모든 대학교');
        break;
      case HOME_CATEGORY.MY_UNIV: // 1
        if (authStore) {
          getMyUniv(authStore).then((value) => setHomeMaterials(value));
          getMy(authStore).then(({ univName }) => {
            setTitle(univName);
          });
        }
        break;
      case HOME_CATEGORY.MY_MAJOR: // 2
        if (authStore) {
          getMyMajor(authStore).then((value) => setHomeMaterials(value));
          getMy(authStore).then(({ major }) => {
            setTitle(major);
          });
        }
        break;
      case HOME_CATEGORY.MY_CLASS:
        setHomeMaterials(null);
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
            aria-label='prev'
          >
            <AppLogoIcon />
          </button>
        }
        icons={[
          <button type="button" onClick={onToggle} aria-label='cart'>
            <CartDefaultIcon />
          </button>,
          <button type="button" onClick={onToggle} aria-label='alarm'>
            <NotificationDefaultIcon />
          </button>,
        ]}
      />
      <PageContainer>
        <HomeContainer>
          <BannerContainer>
            <Banner />
            <Banner />
            <Banner />
          </BannerContainer>

          <HomeCategoryButtonSection
            currentCategory={currentCategory}
            updateCategory={updateCategory}
          />
          <AllDivider />

          <ContentPageContainer>
            <HomeContentPageTitle title={title} />

            <HomeTagCardTitle
              title="신규 등록 자료"
              tag="new"
              category={currentCategory}
            />
            <HomeMaterialCardWrapper>
              {homeMaterials?.newUpload &&
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
                      univ={material.univ}
                      major={material.major}
                      semester={material.semester}
                      professor={material.professor}
                      like={material.like}
                    />
                  );
                })}
            </HomeMaterialCardWrapper>

            <HomeTagCardTitle
              title="베스트 자료"
              tag="hot"
              category={currentCategory}
            />
            <HomeMaterialCardWrapper>
              {homeMaterials?.best &&
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
                      univ={material.univ}
                      major={material.major}
                      semester={material.semester}
                      professor={material.professor}
                      like={material.like}
                    />
                  );
                })}
            </HomeMaterialCardWrapper>

            <HomeTagCardTitle
              title="최근에 본 자료"
              category={currentCategory}
            />
            <CardWrapper>
              {materials &&
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
                      univ={material.univ}
                      major={material.major}
                      semester={material.semester}
                      professor={material.professor}
                      like={material.like}
                    />
                  );
                })}
            </CardWrapper>
          </ContentPageContainer>
        </HomeContainer>

        <BottomBar />
      </PageContainer>
      <Modal
        modalRef={modalRef}
        type="TO_BE_UPDATED"
        onToggle={onToggle}
        primaryAction={() => {}}
        secondaryAction={() => {}}
      />
    </>
  );
};

export default Home;
