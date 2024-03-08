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
          [HTTP_HEADERS.AUTHORIZATION]: `Bearer ${accessToken}`,
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

export const getMyBookmarks = async (
  page: number,
  pageSize: number,
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    headers: {
      [HTTP_HEADERS.AUTHORIZATION]: `Bearer ${accessToken}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}/my/bookmark?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const getMyLikes = async (
  page: number,
  pageSize: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    headers: {
      [HTTP_HEADERS.AUTHORIZATION]: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}/my/like?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export default getMyProfile;
