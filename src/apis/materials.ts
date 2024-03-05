import useRefreshPayload from '../hooks/common/useRefreshPayload';
import { RetryPayload, fetchWithTokenRetry } from './member';

export const getAllUniv = async () => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ`);
  const data = await response.json();
  return data;
};

export const getMyUniv = async (
  authStore: string,
  retrypayload: RetryPayload,
) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `https://majorfolio-server.shop/home/my/univ`,
    requestOptions,
    retrypayload,
  );

  return data;
};

export const getMyMajor = async (
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `https://majorfolio-server.shop/home/my/major`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const getAllUnivNewlyViewAll = async (
  page: number,
  pageSize: number,
) => {
  const response = await fetch(
    `https://majorfolio-server.shop/home/all/univ/newly-upload?page=${page}&pageSize=${pageSize}`,
  );
  const data = await response.json();
  return data;
};

export const getAllUnivBestViewAll = async (page: number, pageSize: number) => {
  const response = await fetch(
    `https://majorfolio-server.shop/home/all/univ/likes?page=${page}&pageSize=${pageSize}`,
  );
  const data = await response.json();
  return data;
};

export const getMyUnivNewlyViewAll = async (
  page: number,
  pageSize: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `https://majorfolio-server.shop/home/my/univ/newly-upload?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const getMyUnivBestViewAll = async (
  page: number,
  pageSize: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `https://majorfolio-server.shop/home/my/univ/likes?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const getMyMajorNewlyViewAll = async (
  page: number,
  pageSize: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `https://majorfolio-server.shop/home/my/major/newly-upload?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const getMyMajorBestViewAll = async (
  page: number,
  pageSize: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `https://majorfolio-server.shop/home/my/major/likes?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const getMaterialDetail = async (
  materialId: number,
  authStore?: string,
  refreshPayload?: RetryPayload,
) => {
  if (authStore && refreshPayload) {
    const requestOptions = {
      headers: { Authorization: `Bearer ${authStore}` },
    };

    const data = await fetchWithTokenRetry(
      `https://majorfolio-server.shop/assignment/${materialId}/detail`,
      requestOptions,
      refreshPayload,
    );

    return data;
  }

  const response = await fetch(
    `https://majorfolio-server.shop/assignment/${materialId}/detail`,
  );
  const data = await response.json();
  return data;
};

export const updateLike = async (
  materialId: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authStore}`,
      },
      body: JSON.stringify({}),
    };
    return await fetchWithTokenRetry(
      `https://majorfolio-server.shop/my/${materialId}/like`,
      requestOptions,
      refreshPayload,
    );
  } catch (e) {
    return Promise.reject(e);
  }
};

export const updateBookmark = async (
  materialId: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authStore}`,
      },
      body: JSON.stringify({}),
    };
    return await fetchWithTokenRetry(
      `https://majorfolio-server.shop/my/${materialId}/bookmark`,
      requestOptions,
      refreshPayload,
    );
  } catch (e) {
    return Promise.reject(e);
  }
};
