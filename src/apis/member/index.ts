import { HTTP_METHODS } from '../constants';
import MEMBER_API_PATHS from '../constants/member';

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
