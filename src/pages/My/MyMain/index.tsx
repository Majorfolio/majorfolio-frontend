import React from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/common/Text';
import {
  StyledPortrait,
  StyledProfileCountRow,
  StyledProfileIntro,
  StyledProfileSection,
  StyledTagSection,
  StyledWelcomeSection,
} from './index.styles';
import AllTagBig from '../../../components/common/AllTagBig';
import MaterialPostStatisticsNumber, {
  MyProfileStatisticsNumber,
} from '../../../components/home/MaterialPostStatisticsNumber';
import useMyProfile from './useMyProfile';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { ArrowBackDefaultIcon } from '../../../assets/icons';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';
import { MainLeftContainer, MainRightContainer, PageContainer } from '../../../components/common/GlobalStyle/index.styles';
import MainLeftBoxTop from '../../../components/common/MainLeftBoxTop';
import MainLeftBoxBottom from '../../../components/common/MainLeftBoxBottom';

export default function MyMain() {
  const { nickName, univName, major, image_url, upload, sell, follower } =
    useMyProfile();

  const navigate = useNavigate();

  const welcomeText = (
    <>
      <Text color="main_color/blue_p" size={22} weight="bold" lineHeight="lg">
        {nickName}
      </Text>
      <Text color="gray/gray900" size={22} weight="bold" lineHeight="lg">
        님 <br /> 안녕하세요!
      </Text>
    </>
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
              MY
            </Text>
          }
          icons={[]}
        />
        <StyledPageContainer>
          <StyledProfileSection>
            <StyledProfileIntro>
              <StyledWelcomeSection>
                <div>{welcomeText}</div>
                <StyledTagSection>{tags}</StyledTagSection>
              </StyledWelcomeSection>
              <StyledPortrait />
            </StyledProfileIntro>
            {countInfoRow}
          </StyledProfileSection>
        </StyledPageContainer>
      </MainRightContainer>
    </PageContainer>
  );
}
