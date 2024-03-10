import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BottomBanner,
  BottomBannerWrapper,
  DescriptionMainTextWrapper,
  LeftBoxTopContainer,
  LoginButton,
  MiddleDescriptionWrapper,
  TopLogoWrapper,
} from './index.styles';
import { Logo1 } from '../../../assets/images';
import Text from '../Text';
import useAuthStore, { AuthLevel } from '../../../store/useAuthStore';

const MainLeftBoxTop = () => {
  const navigate = useNavigate();
  const authLevel = useAuthStore((state) => state.authLevel);
  const [bannerImages, setBannerImages] = useState<string[]>([]);

  const handleLoginButtonClick = () => {
    navigate('/signin');
  };

  useEffect(() => {
    // TODO: 배너 이미지 넘어오는 api 생길 경우 수정 필요
    // setBannerImages(["http://placehold.co/240", "http://placehold.co/240"]);
  }, [])

  return (
    <LeftBoxTopContainer>
      <TopLogoWrapper>
        <Logo1 />
        {authLevel === AuthLevel.Guest && (
          <LoginButton onClick={handleLoginButtonClick}>
            <Text size={18} lineHeight="lg">
              로그인
            </Text>
          </LoginButton>
        )}
      </TopLogoWrapper>

      <MiddleDescriptionWrapper>
        <DescriptionMainTextWrapper>
          <Text size={52} lineHeight="lg">
            시성비 최대로!
          </Text>
          <Text size={52} weight="bold" lineHeight="lg">
            우리만의 과제장터
          </Text>
        </DescriptionMainTextWrapper>
        <Text size={22} lineHeight="lg">
          커피 한 잔에 나누는 A+ 비법, <br /> 과제 시간을 반으로 줄여보세요!
        </Text>
      </MiddleDescriptionWrapper>
      
      { bannerImages.length > 0 ? (
        <BottomBannerWrapper>
          {bannerImages.map((image: string) => {
            return <BottomBanner src={image} alt='배너' />
          })}
        </BottomBannerWrapper>) : null
      }
      
    </LeftBoxTopContainer>
  );
};

export default MainLeftBoxTop;
