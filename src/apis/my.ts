import fetchWithEnvironment from '.';
import { HTTP_HEADERS, HTTP_HEADERS_VALUES, HTTP_METHODS } from './constants';
import { RetryPayload, fetchWithTokenRetry } from './member';

const MY_API_COMMON_SEGMENT = '/my';

const MY_API_PATH_SEGEMENTS = {
  MY_PROFILE: '/my/',
  CHANGE_PROFILE_IMAGE: '/my/image',
  CHANGE_PROFILE: '/my/change',
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

export const changeProfileImage = async (
  imageIndex: number,
  accessToken: string,
) => {
  const body = {
    profileImage: String(imageIndex),
  };

  const requestOptions = {
    method: HTTP_METHODS.PATCH,
    headers: {
      [HTTP_HEADERS.CONTENT_TYPE]: HTTP_HEADERS_VALUES.JSON,
      [HTTP_HEADERS.AUTHORIZATION]: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  };

  const data = await fetchWithEnvironment(
    `${process.env.REACT_APP_API_URL}${MY_API_PATH_SEGEMENTS.CHANGE_PROFILE_IMAGE}`,
    requestOptions,
  );

  return data;
};

export interface Profile {
  nickName: string;
  major1: string;
  major2: string;
  studentId: number;
  phoneNumber: string;
  profileImage: string;
}

export const editProfile = async (
  profile: Partial<Omit<Profile, 'profileImage'>>,
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    method: HTTP_METHODS.PATCH,
    headers: {
      [HTTP_HEADERS.CONTENT_TYPE]: HTTP_HEADERS_VALUES.JSON,
      [HTTP_HEADERS.AUTHORIZATION]: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(profile),
  };

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${MY_API_PATH_SEGEMENTS.CHANGE_PROFILE}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export default getMyProfile;
