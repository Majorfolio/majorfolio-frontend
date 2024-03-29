import React from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/common/Text';
import {
  StyledPortrait,
  StyledProfileIntro,
  StyledProfileSection,
  StyledTagSection,
  StyledWelcomeSection,
} from './index.styles';
import AllTagBig from '../../../components/common/AllTagBig';
import { MyProfileStatisticsNumber } from '../../../components/home/MaterialPostStatisticsNumber';
import useMyProfile from './useMyProfile';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { ViewMoreIcon } from '../../../assets/icons';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';

import BottomBar, { Path } from '../../../components/common/BottomBar';
import Column from '../../../components/common/Column';
import RowButton from '../../../components/common/RowButton';
import Row from '../../../components/common/Row';
import useAuthStore, { AuthLevel } from '../../../store/useAuthStore';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../../components/common/Modal';
import Portrait from '../../../components/common/Portrait';

export default function MyMain() {
  const { nickName, univ, major, profileImage, upload, sell, follower } =
    useMyProfile();
  const navigate = useNavigate();
  const authLevel = useAuthStore((state) => state.authLevel);
  const { activateModal, closePrimarily, closeSecondarily, ...modalProps } =
    useModal();

  const activate = (path: string) => {
    if (authLevel === AuthLevel.Unverified) {
      activateModal('REQUIRE_SCHOOL_VERIFICATION', {
        primaryAction: () => navigate('/signup'),
      });
    } else if (authLevel === AuthLevel.Verified) {
      activateModal('REGISTER_INCOMPLETE', {
        primaryAction: () => navigate('/signup'),
      });
    } else if (authLevel === AuthLevel.Member) {
      navigate(path);
    }
  };

  const welcomeText = (
    <Column>
      {authLevel === AuthLevel.Unverified && (
        <>
          <Text color="gray/gray900" size={22} weight="bold" lineHeight="lg">
            잠깐, 학교 인증이
          </Text>
          <Text color="gray/gray900" size={22} weight="bold" lineHeight="lg">
            필요해요
          </Text>
        </>
      )}
      {authLevel === AuthLevel.Verified && (
        <>
          <Text color="gray/gray900" size={22} weight="bold" lineHeight="lg">
            잠깐, 내 정보 입력이
          </Text>
          <Text color="gray/gray900" size={22} weight="bold" lineHeight="lg">
            필요해요
          </Text>
        </>
      )}
      {authLevel === AuthLevel.Member && (
        <>
          <Text
            color="main_color/blue_p"
            size={22}
            weight="bold"
            lineHeight="lg"
          >
            {nickName} 님
          </Text>
          <Text color="gray/gray900" size={22} weight="bold" lineHeight="lg">
            안녕하세요!
          </Text>
        </>
      )}
    </Column>
  );

  const tags = authLevel >= AuthLevel.Member && (
    <>
      <AllTagBig text={univ} color="blue" />
      <AllTagBig text={`본 전공 - ${major}`} color="blue" />
    </>
  );

  const countInfoRow =
    authLevel === AuthLevel.Guest ? (
      <MyProfileStatisticsNumber />
    ) : (
      <MyProfileStatisticsNumber
        upload={upload}
        follower={follower}
        sell={sell}
      />
    );

  return (
    <>
      <SecondaryTopbar
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            MY
          </Text>
        }
        icons={[
          <button
            type="button"
            onClick={() => navigate('./view-more')}
            aria-label="view-more"
          >
            <ViewMoreIcon />
          </button>,
        ]}
      />
      <StyledPageContainer>
        <StyledProfileSection>
          <StyledProfileIntro>
            <StyledWelcomeSection>
              <Row justify="center" pt={32}>
                {welcomeText} <Portrait index={profileImage} />
              </Row>
              <StyledTagSection>{tags}</StyledTagSection>
            </StyledWelcomeSection>
          </StyledProfileIntro>
          {countInfoRow}
        </StyledProfileSection>
        <Column>
          <>
            <RowButton
              text="북마크한 자료"
              onClick={() => activate('./bookmarks')}
            />
            <RowButton
              text="좋아요한 자료"
              onClick={() => activate('./likes')}
            />
            <RowButton
              text="거래 내역"
              onClick={() => activate('./transactions')}
            />
            <RowButton
              type="button"
              text="쿠폰함"
              onClick={() =>
                activateModal('TO_BE_UPDATED', {
                  primaryAction: () => {},
                })
              }
            />
          </>
        </Column>
      </StyledPageContainer>
      <Modal
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
        {...modalProps}
      />

      <BottomBar currentPath={Path.My} />
    </>
  );
}
