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

interface GetAuthResponseType {
  code: number;
  status: number;
  message: string;
  result: {
    isMember: boolean;
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

export const sendCodeToEmail = async (email: string, accessToken: string) => {
  const response = await fetch(
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
  );
  const data = await response.json();
  return data;
};

export const validateCode = async (
  emailId: number,
  code: string,
  accessToken: string,
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.SCHOOL_EMAIL}/${emailId}/${code}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const { message } = await response.json();
    if (message === '요청에 성공하였습니다.') {
      return {
        success: true,
        message,
      };
    }
    if (message === '인증 코드가 다릅니다.') {
      return {
        success: false,
        message,
      };
    }
    if (message === '인증 시간이 지났습니다.') {
      return {
        success: true,
        message,
      };
    }
    throw new Error('에러 발생');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signup = async (
  user: Omit<UserStateType, 'updateEmail' | 'updateDetails' | 'updateNickname'>,
  accessToken: string,
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.SIGNUP}`,
    {
      method: HTTP_METHODS.POST,
      headers: {
        authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  const data = await response.json();
  if (response.ok) {
    console.log('data');
  }
};

interface VerifyNicknameResponseType {
  code: number;
  status: number;
  message: string;
  result: '사용가능한 닉네임 입니다.' | '중복된 닉네임 입니다.';
}

export const checkDuplicateNickname = async (
  nickname: string,
  accessToken: string,
) => {
  console.log(nickname);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.CHECK_NICKNAME}/${nickname}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  );
  if (response.ok) {
    const { result } = (await response.json()) as VerifyNicknameResponseType;
    if (result === '사용가능한 닉네임 입니다.') {
      return true;
    }
    if (result === '중복된 닉네임 입니다.') {
      return false;
    }
  } else {
    throw new Error('서비스에 문제가 발생했습니다.');
  }
  return false;
};

export const getMy = async (authStore: string) => {
  const request0ptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const response = await fetch(
    `https://majorfolio-server.shop/my/`,
    request0ptions,
  );
  const data = await response.json();
  return data;
};

export const sendContact = async (phoneNumber: string, accessToken: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.PHONE_NUMBER}`,
    {
      method: HTTP_METHODS.POST,
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(phoneNumber),
    },
  );
  const data = await response.json();
  return data;
};

export const signout = async (accessToken: string) => {};

export const deleteAccount = async (accessToken: string) => {
  const requestOptions = {
    method: HTTP_METHODS.POST,
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json',
    },
  };

  await fetch(
    `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.DELETE}`,
    requestOptions,
  );
};
