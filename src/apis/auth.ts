import { HTTP_HEADERS, HTTP_METHODS } from './constants';

const getIdToken = async (code: string) => {
  try {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: 'de13e7d19e639ae838e4735a0cf14614',
      redirect_uri: `${process.env.REACT_APP_BASE_URL}/callback`,
      code,
    }).toString();

    const response = await fetch('https://kauth.kakao.com/oauth/token', {
      method: HTTP_METHODS.POST,
      headers: {
        [HTTP_HEADERS.CONTENT_TYPE]:
          'application/x-www-form-urlencoded;charset=utf-8',
      },
      body,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error ${response.status}: ${errorData.error_description}`,
      );
    }

    const { id_token: idToken } = await response.json();
    return idToken;
  } catch (error) {
    // TODO handle error properly
    console.error('Error fetching data: ', error);
    throw error;
  }
};

export default getIdToken;
