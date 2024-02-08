import React from 'react';
import Text from '../../components/common/Text';
import { Logo } from '../../assets/images/landing';
import StyledLogoContainer, {
  StyledButtonContainer,
  StyledSigninButton,
  StyledSigninContainer,
} from './index.styles';
import { KakaoIcon } from '../../assets/icons';
import Button from '../../components/common/Button';

export default function Signin() {
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
        <Button backgroundColor="gray/grayBG" isOutlined>
          <Text
            color="main_color/blue_p"
            weight="bold"
            lineHeight="sm"
            size={16}
          >
            게스트로 입장하기
          </Text>
        </Button>
        <StyledSigninButton backgroundColor="kakaotalk">
          <KakaoIcon />
          <Text color="gray/black" weight="bold" lineHeight="sm" size={16}>
            카카오톡으로 시작하기
          </Text>
        </StyledSigninButton>
      </StyledButtonContainer>
    </StyledSigninContainer>
  );
}
