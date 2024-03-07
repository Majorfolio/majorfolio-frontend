import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import { Logo } from '../../assets/images/landing';
import {
  StyledLogoContainer,
  StyledButtonContainer,
  StyledSigninContainer,
  StickyBottom,
} from './index.styles';
import { KakaoIcon } from '../../assets/icons';
import Button, { KakaoButton } from '../../components/common/Button';
import useSignin from './useSignin';
import useAuthStore, { AuthLevel } from '../../store/useAuthStore';
import MainLeftBoxTop from '../../components/common/MainLeftBoxTop';
import MainLeftBoxBottom from '../../components/common/MainLeftBoxBottom';
import useRequireAuth from '../../hooks/common/useRequireAuth';

export default function Signin() {
  const { onKakaoSignin } = useSignin();
  const navigate = useNavigate();

  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Guest,
    AuthLevel.Guest,
  );

  if (!isAuthLevelSatisfied) {
    return <>유효하지 않은 페이지입니다. 메인 화면으로 이동합니다.</>;
  }

  return (
    <StyledSigninContainer>
      <StyledLogoContainer>
        <Logo />
        <Text color="gray/gray900" size={16} lineHeight="lg">
          우리끼리 만들어 더욱 강력한 <br />
          전공 포트폴리오
        </Text>
      </StyledLogoContainer>
      <StickyBottom>
        <StyledButtonContainer>
          <Button
            category="outlined"
            onClick={() => {
              navigate('/home');
            }}
          >
            <Text
              color="main_color/blue_p"
              weight="bold"
              lineHeight="sm"
              size={16}
            >
              게스트로 입장하기
            </Text>
          </Button>
          <KakaoButton onClick={onKakaoSignin}>
            카카오톡으로 시작하기
          </KakaoButton>
        </StyledButtonContainer>
      </StickyBottom>
    </StyledSigninContainer>
  );
}
