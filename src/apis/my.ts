import { HTTP_HEADERS, HTTP_METHODS } from './constants';

const MY_API_COMMON_SEGMENT = '/my';

const MY_API_PATH_SEGEMENTS = {
  MY_PROFILE: '/my/',
};

const getMyProfile = async (accessToken: string) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${MY_API_PATH_SEGEMENTS.MY_PROFILE}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('네트워크 에러 발생');
  } catch (error) {
    // TODO handle error properly
    console.error('Error fetching data: ', error);
    throw error;
  }
};

export default getMyProfile;
