import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HTTP_HEADERS, HTTP_METHODS } from '../../../apis/constants';

const API_URL1 =
  'http://ec2-54-180-59-160.ap-northeast-2.compute.amazonaws.com';
const API_URL2 = 'https://majorfolio-server.shop';
const PATH = '/member/login';

interface AuthType {
  isMember: boolean;
  memberId: number;
  accessToken: string;
  refreshToken: string;
}

export default function useTokenExchange() {
  const location = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useState<AuthType | null>(null);

  useEffect(() => {
    const queryString = location.search;
    const searchParams = new URLSearchParams(queryString);
    const code = searchParams.get('code');

    if (!code) {
      throw new Error('에러 발생');
    }

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: 'de13e7d19e639ae838e4735a0cf14614',
      redirect_uri: 'http://localhost:3000/callback',
      code,
    }).toString();

    fetch('https://kauth.kakao.com/oauth/token', {
      method: HTTP_METHODS.POST,
      headers: {
        [HTTP_HEADERS.CONTENT_TYPE]:
          'application/x-www-form-urlencoded;charset=utf-8',
      },
      body,
    })
      .then((response) => response.json())
      .then(({ id_token }) => {
        const state = sessionStorage.getItem('oauth_state');
        const nonce = sessionStorage.getItem('openid_nonce');

        if (!state) {
          throw new Error('에러 발생');
        }

        if (!nonce) {
          throw new Error('에러 발생');
        }

        if (!id_token) {
          throw new Error('id token을 받지 못했습니다.');
        }

        return fetch(`${API_URL2}${PATH}`, {
          method: HTTP_METHODS.POST,
          credentials: 'include',
          headers: {
            authorization: `Bearer ${id_token}`,
            state,
            nonce,
          },
        });
      })
      .then((response) => response.json())
      .then(({ result }) => {
        console.log(result);
        const { isMember, memberId, accessToken, refreshToken } = result;
        setAuth({ isMember, memberId, accessToken, refreshToken });

        // TODO update the global state
        navigate('/signup');
      });
  }, [location]);

  return { auth, setAuth };
}
