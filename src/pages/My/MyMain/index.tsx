import React from 'react';
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

export default function MyMain() {
  const { nickName, univName, major, image_url, upload, sell, follower } =
    useMyProfile();

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
  );
}
