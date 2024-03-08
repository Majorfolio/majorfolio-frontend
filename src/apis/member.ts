import { UserStateType } from '../store/userStore';
import { HTTP_METHODS } from './constants';

const MEMBER_API_COMMON_SEGMENT = '/member';

const MEMBER_API_SEGMENTS = {
  LOGIN: '/login',
  SCHOOL_EMAIL: '/code',
  SIGNUP: '/signup',
  REMAKE_TOKEN: '/remake/token',
  CHECK_NICKNAME: '/check-nickname',
  LOGOUT: '/logout',
  DELETE: '/delete',
};

const MEMBER_API_PATHS = {
  LOGIN: '/member/login',
  SCHOOL_EMAIL: '/member/school-email',
  SCHOOL_EMAIL_CODE: '/member/school-email/code',
  SIGNUP: '/member/signup',
  REMAKE_TOKEN: '/member/remake/token',
  CHECK_NICKNAME: '/member/check-nickname',
  LOGOUT: '/member/logout',
  DELETE: '/member/delete',
  PHONE_NUMBER: '/member/phone-number',
};

export default MEMBER_API_PATHS;

export const reissueAccessToken = async (refreshToken: string) => {
  const requestOptions = {
    method: HTTP_METHODS.POST,
    headers: {
      authorization: `Bearer ${refreshToken}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({}),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.REMAKE_TOKEN}`,
    requestOptions,
  );

  // TODO signout when refresh token gets expired
  return response;
};

export interface RetryPayload {
  refreshToken: string;
  onRetrySuccess: (newAccessToken: string, newRefreshToken: string) => void;
  onRetryFail: () => void;
}

export async function fetchWithTokenRetry(
  url: string,
  options: RequestInit,
  retryPayload: RetryPayload,
) {
  const { refreshToken, onRetrySuccess, onRetryFail } = retryPayload;

  // TODO set all the return type to body(response is useless)
  const response = await fetch(url, options);
  const data = await response.json();
  const { code, result } = data;
  if (code !== 4005) {
    return data;
  }

  const refreshResponse = await reissueAccessToken(refreshToken);
  const { refreshCode, ...refreshResult } = await refreshResponse.json();

  if (refreshCode === 4005) {
    // signout and navigate
    onRetryFail();
    return refreshResult;
  }
  const { newAccessToken, newRefreshToken } = result;
  // signout and update tokens
  onRetrySuccess(newAccessToken, newRefreshToken);
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      authorization: `Bearer ${newAccessToken}`,
    },
  }).then((retryResponse) => retryResponse.json());
}

interface GetAuthResponseType {
  code: number;
  status: number;
  message: string;
  result: {
    isWriteMemberDetailInfo: boolean;
    memberId: number;
    emailId: number;
    accessToken: string;
    refreshToken: string;
  };
}

export type AuthResultType = GetAuthResponseType['result'];

export const getAuth = async (idToken: string) => {
  try {
    const state = sessionStorage.getItem('oauth_state');
    const nonce = sessionStorage.getItem('openid_nonce');

    if (!state) {
      throw new Error('에러 발생');
    }

    if (!nonce) {
      throw new Error('에러 발생');
    }

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.LOGIN}`,
      {
        method: HTTP_METHODS.POST,
        headers: {
          authorization: `Bearer ${idToken}`,
          state,
          nonce,
        },
      },
    );
    if (response.ok) {
      const { result } = (await response.json()) as GetAuthResponseType;
      return result;
    }
    throw new Error('ok 아님');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendCodeToEmail = async (
  email: string,
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.SCHOOL_EMAIL_CODE}`,
    {
      method: HTTP_METHODS.POST,
      headers: {
        authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    },
    refreshPayload,
  );

  return data;
};

export const validateCode = async (
  emailId: number,
  code: string,
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.SCHOOL_EMAIL}/${emailId}/${code}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
    refreshPayload,
  );
  return data;
};

export const sendNewUser = async (
  user: Omit<UserStateType, 'updateEmail' | 'updateDetails' | 'updateNickname'>,
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.SIGNUP}`,
    {
      method: HTTP_METHODS.POST,
      headers: {
        authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
    refreshPayload,
  );
};

interface VerifyNicknameResponseType {
  code: number;
  status: number;
  message: string;
  result: '사용가능한 닉네임 입니다.' | '중복된 닉네임 입니다.';
}

export const validateNickname = async (
  nickname: string,
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.CHECK_NICKNAME}/${nickname}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
    refreshPayload,
  );
  return data;
};

export const getMy = async (
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `https://majorfolio-server.shop/my/`,
    requestOptions,
    refreshPayload,
  );
  return data;
};

export const sendContact = async (
  phoneNumber: string,
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.PHONE_NUMBER}`,
    {
      method: HTTP_METHODS.POST,
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(phoneNumber),
    },
    refreshPayload,
  );

  return data;
};

export const deleteAccount = async (
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    method: HTTP_METHODS.POST,
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json',
    },
  };

  await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.DELETE}`,
    requestOptions,
    refreshPayload,
  );
};
