import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import { Logo } from '../../assets/images/landing';
import StyledLogoContainer, {
  StyledButtonContainer,
  StyledSigninButton,
  StyledSigninContainer,
} from './index.styles';
import { KakaoIcon } from '../../assets/icons';
import Button from '../../components/common/Button';

const API_URL1 =
  'http://ec2-54-180-59-160.ap-northeast-2.compute.amazonaws.com';
const PATH = '/member/login';

const API_URL2 = 'https://majorfolio-server.shop';

export default function Signin() {
  const location = useLocation();

  useEffect(() => {
    const queryString = location.search;
    const searchParams = new URLSearchParams(queryString);
    const code = searchParams.get('code');
    if (code) {
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: 'de13e7d19e639ae838e4735a0cf14614',
        redirect_uri: 'http://localhost:3000/signin',
        code,
      }).toString();

      fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const { id_token } = data;
          console.log(id_token);
          return fetch(`${API_URL2}${PATH}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              Authorization: `Bearer ${id_token}`,
              State: 'hi',
              Nonce: 'hi',
            },
          });
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [location]);

  const onKakaoSignin = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=de13e7d19e639ae838e4735a0cf14614&redirect_uri=http://localhost:3000/signin&response_type=code';
  };

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
        <StyledSigninButton backgroundColor="kakaotalk" onClick={onKakaoSignin}>
          <KakaoIcon />
          <Text color="gray/black" weight="bold" lineHeight="sm" size={16}>
            카카오톡으로 시작하기
          </Text>
        </StyledSigninButton>
      </StyledButtonContainer>
    </StyledSigninContainer>
  );
}
