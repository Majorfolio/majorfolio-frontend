import { HTTP_METHODS } from '../constants';

const API_URL2 = 'https://majorfolio-server.shop';
const PATH = '/member/login';

const getAuth = async (idToken: string) => {
  try {
    const state = sessionStorage.getItem('oauth_state');
    const nonce = sessionStorage.getItem('openid_nonce');

    if (!state) {
      throw new Error('에러 발생');
    }

    if (!nonce) {
      throw new Error('에러 발생');
    }

    const response = await fetch(`${API_URL2}${PATH}`, {
      method: HTTP_METHODS.POST,
      credentials: 'include',
      headers: {
        authorization: `Bearer ${idToken}`,
        state,
        nonce,
      },
    });

    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAuth;
