import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import { Logo } from '../../assets/images/landing';
import {
  StyledLogoContainer, 
  StyledButtonContainer,
  StyledSigninButton,
  StyledSigninContainer,
} from './index.styles';
import { KakaoIcon } from '../../assets/icons';
import Button from '../../components/common/Button';
import useSignin from './useSignin';

export default function Signin() {
  const { onKakaoSignin } = useSignin();

  return (
    <StyledSigninContainer>
      <StyledLogoContainer>
        <Logo />
        <Text color="gray/gray900" size={16} lineHeight="lg">
          우리끼리 만들어 더욱 강력한 <br />
          전공 포트폴리오
        </Text>
      </StyledLogoContainer>
      <StyledButtonContainer>
        <Button category="outlined">
          <Text
            color="main_color/blue_p"
            weight="bold"
            lineHeight="sm"
            size={16}
          >
            게스트로 입장하기
          </Text>
        </Button>
        <StyledSigninButton category="kakaotalk" onClick={onKakaoSignin}>
          <KakaoIcon />
          <Text color="gray/black" weight="bold" lineHeight="sm" size={16}>
            카카오톡으로 시작하기
          </Text>
        </StyledSigninButton>
      </StyledButtonContainer>
    </StyledSigninContainer>
  );
}
