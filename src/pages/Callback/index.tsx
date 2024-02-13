import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const API_URL1 =
  'http://ec2-54-180-59-160.ap-northeast-2.compute.amazonaws.com';
const PATH = '/member/login';

const API_URL2 = 'https://majorfolio-server.shop';

export default function Callback() {
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

          const state = sessionStorage.getItem('oauth_state');
          const nonce = sessionStorage.getItem('openid_nonce');

          return fetch(`${API_URL2}${PATH}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              authorization: `Bearer ${id_token}`,
              state,
              nonce,
            },
          });
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [location]);
}
