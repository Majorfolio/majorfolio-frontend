import React from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import { Logo } from '../../assets/images/landing';
import {
  StyledLogoContainer,
  StyledButtonContainer,
  StyledSigninContainer,
  StickyBottom,
} from './index.styles';
import Button, { KakaoButton } from '../../components/common/Button';
import { AuthLevel } from '../../store/useAuthStore';

import useRequireAuth from '../../hooks/common/useRequireAuth';

const generateUniqueRandomValue = () => {
  const randomPart = window.crypto
    .getRandomValues(new Uint32Array(1))[0]
    .toString(16);
  const timePart = new Date().getTime().toString(16);
  return `${randomPart}-${timePart}`;
};

const signinViaKakao = () => {
  const state = generateUniqueRandomValue();
  const nonce = generateUniqueRandomValue();

  sessionStorage.setItem('oauth_state', state);
  sessionStorage.setItem('openid_nonce', nonce);

  const queryString = new URLSearchParams({
    client_id: 'de13e7d19e639ae838e4735a0cf14614',
    redirect_uri: `${process.env.REACT_APP_BASE_URL}/callback`,
    response_type: 'code',
    state,
    nonce,
  }).toString();

  window.location.href = `https://kauth.kakao.com/oauth/authorize?${queryString}`;
};

export default function Signin() {
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
          <KakaoButton onClick={signinViaKakao}>
            카카오톡으로 시작하기
          </KakaoButton>
        </StyledButtonContainer>
      </StickyBottom>
    </StyledSigninContainer>
  );
}
