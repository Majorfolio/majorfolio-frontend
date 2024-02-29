import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BottomBarContainer,
  CustomRadioNavigation,
  IconWrapper,
  IconsContainer,
  RadioNavigationWrapper,
  StickyContainer,
} from './index.styles';
import Text from '../Text';
import AllDividerThin from '../AllDividerThin';
import {
  HomeFilledIcon,
  HomeDefaultIcon,
  TaskboxFilledIcon,
  TaskboxDefaultIcon,
  UploadFilledIcon,
  UploadDefaultIcon,
  MyFilledIcon,
  MyDefaultIcon,
} from '../../../assets/icons';
import useModal from '../../../hooks/common/useModal';
import Modal from '../Modal';
import useRequireAuth from '../../../hooks/common/useRequireAuth';

export enum Path {
  Home = '/home',
  MaterialBox = '/material-box',
  Upload = '/upload',
  My = '/my',
  Signin = '/signin',
  Signup = '/signup',
}

export default function BottomBar() {
  const [currentPage, setCurrentPage] = useState<Path>(Path.Home);
  const navigate = useNavigate();
  const {
    modalRef,
    activateModal,
    closePrimarily,
    closeSecondarily,
    category: modalCategory,
  } = useModal();
  const { isUserSignedin, hasUserVerifiedSchool } = useRequireAuth('guest');

  const redirect = (path: Path) => {
    if (!isUserSignedin) {
      activateModal('REQUIRE_SIGNIN', {
        primaryAction: () => navigate(Path.Signin),
      });
    } else if (!hasUserVerifiedSchool) {
      activateModal('REQUIRE_SIGNUP', {
        primaryAction: () => navigate(Path.Signup),
      });
    } else {
      // 원하는 페이지로 이동
      setCurrentPage(path);
      navigate(path);
    }
  };

  const handleNavigationClick = (path: Path) => {
    redirect(path);
    // 페이지 이동 후 새로고침, 스크롤 위치 맨 위
    // window.location.reload();
    // window.scrollTo(0, 0);
  };

  return (
    <StickyContainer>
      <AllDividerThin />
      <BottomBarContainer>
        <RadioNavigationWrapper>
          <CustomRadioNavigation
            type="radio"
            id="home"
            name="bottomBar"
            checked={currentPage === Path.Home}
            onChange={() => handleNavigationClick(Path.Home)}
          />
          <CustomRadioNavigation
            type="radio"
            id="taskbox"
            name="bottomBar"
            checked={currentPage === Path.MaterialBox}
            onChange={() => handleNavigationClick(Path.MaterialBox)}
          />
          <CustomRadioNavigation
            type="radio"
            id="upload"
            name="bottomBar"
            checked={currentPage === Path.Upload}
            onChange={() => handleNavigationClick(Path.Upload)}
          />
          <CustomRadioNavigation
            type="radio"
            id="my"
            name="bottomBar"
            checked={currentPage === Path.My}
            onChange={() => handleNavigationClick(Path.My)}
          />
        </RadioNavigationWrapper>

        <IconsContainer>
          {currentPage === Path.Home ? (
            <IconWrapper>
              <HomeFilledIcon />
              <Text
                size={10}
                weight="bold"
                lineHeight="sm"
                color="main_color/blue_p"
              >
                홈
              </Text>
            </IconWrapper>
          ) : (
            <IconWrapper>
              <HomeDefaultIcon />
              <Text size={10} lineHeight="sm" color="gray/gray200">
                홈
              </Text>
            </IconWrapper>
          )}
          {currentPage === Path.MaterialBox ? (
            <IconWrapper>
              <TaskboxFilledIcon />
              <Text
                size={10}
                weight="bold"
                lineHeight="sm"
                color="main_color/blue_p"
              >
                자료함
              </Text>
            </IconWrapper>
          ) : (
            <IconWrapper>
              <TaskboxDefaultIcon />
              <Text size={10} lineHeight="sm" color="gray/gray200">
                자료함
              </Text>
            </IconWrapper>
          )}
          {currentPage === Path.Upload ? (
            <IconWrapper>
              <UploadFilledIcon />
              <Text
                size={10}
                weight="bold"
                lineHeight="sm"
                color="main_color/blue_p"
              >
                업로드
              </Text>
            </IconWrapper>
          ) : (
            <IconWrapper>
              <UploadDefaultIcon />
              <Text size={10} lineHeight="sm" color="gray/gray200">
                업로드
              </Text>
            </IconWrapper>
          )}
          {currentPage === Path.My ? (
            <IconWrapper>
              <MyFilledIcon />
              <Text
                size={10}
                weight="bold"
                lineHeight="sm"
                color="main_color/blue_p"
              >
                MY
              </Text>
            </IconWrapper>
          ) : (
            <IconWrapper>
              <MyDefaultIcon />
              <Text size={10} lineHeight="sm" color="gray/gray200">
                MY
              </Text>
            </IconWrapper>
          )}
        </IconsContainer>
      </BottomBarContainer>
      <Modal
        category={modalCategory}
        modalRef={modalRef}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />
    </StickyContainer>
  );
}
