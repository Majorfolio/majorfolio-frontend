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
import { ArrowBackDefaultIcon, ViewMoreIcon } from '../../../assets/icons';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';

import BottomBar from '../../../components/common/BottomBar';
import Column from '../../../components/common/Column';
import RowButton from '../../../components/common/RowButton';

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
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate(-1)} aria-label="prev">
            <ArrowBackDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            MY
          </Text>
        }
        icons={[
          <button type="button" onClick={() => navigate('./view-more')}>
            <ViewMoreIcon />
          </button>,
        ]}
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
        <Column>
          <RowButton
            text="북마크한 자료"
            onClick={() => navigate('./bookmarks')}
          />
          <RowButton text="좋아요한 자료" onClick={() => navigate('./likes')} />
          <RowButton
            text="거래 내역"
            onClick={() => navigate('../transactions')}
          />
          <RowButton
            type="button"
            text="쿠폰함"
            onClick={() => navigate('/')}
          />
        </Column>
      </StyledPageContainer>

      <BottomBar />
    </>
  );
}
