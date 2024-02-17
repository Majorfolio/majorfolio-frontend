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
  SCHOOL_EMAIL: '/member/school-email/code',
  SIGNUP: '/member/signup',
  REMAKE_TOKEN: '/member/remake/token',
  CHECK_NICKNAME: '/member/check-nickname',
  LOGOUT: '/member/logout',
  DELETE: '/member/delete',
};

export default MEMBER_API_PATHS;

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

    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendCodeToEmail = async (
  email: string,
  accessToken: string,
): Promise<number> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.SCHOOL_EMAIL}`,
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
    const { result } = await response.json();
    const { emailId } = result;
    return emailId;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const validateCode = async (
  emailId: number,
  code: string,
  accessToken: string,
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${MEMBER_API_PATHS.SCHOOL_EMAIL}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          emailId,
          code,
        }),
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
