import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BottomWrapper, DescriptionMainTextWrapper, LeftBoxTopContainer, LoginButton, MiddleDescriptionWrapper, TopLogoWrapper } from './index.styles'
import { Logo1 } from '../../../assets/images'
import Text from '../Text'

const MainLeftBoxTop = () => {
  const navigate = useNavigate();
  const handleLoginButtonClick = () => {
    navigate('/signin');
  }

  return (
    <LeftBoxTopContainer>
      <TopLogoWrapper>
        <Logo1 />
        <LoginButton onClick={handleLoginButtonClick}>
          <Text size={18} lineHeight='lg'>로그인</Text>
        </LoginButton>
      </TopLogoWrapper>

      <MiddleDescriptionWrapper>
        <DescriptionMainTextWrapper>
          <Text size={52} lineHeight='lg'>시성비 최대로!</Text>
          <Text size={52} weight='bold' lineHeight='lg'>우리만의 과제장터</Text>        
        </DescriptionMainTextWrapper>
        <Text size={22} lineHeight='lg'>커피 한 잔에 나누는 A+ 비법, <br /> 과제 시간을 반으로 줄여보세요!</Text>
      </MiddleDescriptionWrapper>

      <BottomWrapper />
    </LeftBoxTopContainer>
  )
}

export default MainLeftBoxTop