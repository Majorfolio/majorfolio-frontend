import React from 'react';

const generateUniqueRandomValue = () => {
  const randomPart = window.crypto
    .getRandomValues(new Uint32Array(1))[0]
    .toString(16);
  const timePart = new Date().getTime().toString(16);
  return `${randomPart}-${timePart}`;
};

export default function useSignin() {
  const onKakaoSignin = () => {
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

  return { onKakaoSignin };
}
