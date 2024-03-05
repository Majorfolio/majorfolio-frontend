import { HTTP_HEADERS, HTTP_METHODS } from './constants';
import { RetryPayload, fetchWithTokenRetry } from './member';

const MY_API_COMMON_SEGMENT = '/my';

const MY_API_PATH_SEGEMENTS = {
  MY_PROFILE: '/my/',
};

const getMyProfile = async (
  accessToken: string,
  retryPayload: RetryPayload,
) => {
  try {
    const data = await fetchWithTokenRetry(
      `${process.env.REACT_APP_API_URL}${MY_API_PATH_SEGEMENTS.MY_PROFILE}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
      retryPayload,
    );
    return data;
  } catch (error) {
    // TODO handle error properly
    console.error('Error fetching data: ', error);
    throw error;
  }
};

export default getMyProfile;
