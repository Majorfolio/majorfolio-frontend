import { RetryPayload, fetchWithTokenRetry } from './member';

const LIBRARY_COMMON_SEGMENT = 'library';

const LIBRARY_PATH_SEGMENTS = {
  PURCHASED: '/library/buy',
  UPLOADED: '/library/upload',
};

export const getPurchaseInfo = async (
  page: number,
  pageSize: number,
  accessToken: string,
  retryPayload: RetryPayload,
) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
  });

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${LIBRARY_PATH_SEGMENTS.PURCHASED}?${queryParams}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
    retryPayload,
  );

  return data;
};

export const getUploadInfo = async (
  page: number,
  pageSize: number,
  accessToken: string,
  retryPayload: RetryPayload,
) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
  });

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${LIBRARY_PATH_SEGMENTS.UPLOADED}?${queryParams}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
    retryPayload,
  );

  return data;
};