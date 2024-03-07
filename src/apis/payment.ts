import { access } from 'fs';
import { Order } from '../components/home/Payment/index.types';
import { HTTP_METHODS } from './constants';
import { RetryPayload, fetchWithTokenRetry } from './member';

const PAYMENT_API_PATHS = {
  PAYMENTS_INFO: '/payments/info',
  CANCEL: '/payments/cancel',
  PURCHASES: '/transaction/buy',
  SALES: '/transaction/sale',
};

export const updateBuyInfo = async (
  authStore: string,
  buyInfo: Order,
  refreshPayload: RetryPayload,
) => {
  try {
    const requestOptions = {
      method: HTTP_METHODS.POST,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authStore}`,
      },
      body: JSON.stringify(buyInfo),
    };
    return await fetchWithTokenRetry(
      `${process.env.REACT_APP_API_URL}${PAYMENT_API_PATHS.PAYMENTS_INFO}`,
      requestOptions,
      refreshPayload,
    );
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getBuyInfo = async (
  authStore: string,
  buyInfoId: number,
  refreshPayload: RetryPayload,
) => {
  // const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${PAYMENT_API_PATHS.PAYMENTS_INFO}/${buyInfoId}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const updateCancel = async (
  authStore: string,
  buyInfoId: number,
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
      `${process.env.REACT_APP_API_URL}${PAYMENT_API_PATHS.CANCEL}/${buyInfoId}`,
      requestOptions,
      refreshPayload,
    );
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getPurchases = async (
  page: number,
  pageSize: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  // const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${PAYMENT_API_PATHS.PURCHASES}?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const getSales = async (
  page: number,
  pageSize: number,
  authStore: string,
  refreshPayload: RetryPayload,
) => {
  // const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${authStore}`,
    },
  };

  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${PAYMENT_API_PATHS.SALES}?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const cancelPayment = async (
  buyInfoId: string,
  accessToken: string,
  refreshPayload: RetryPayload,
) => {
  const data = await fetchWithTokenRetry(
    `${process.env.REACT_APP_API_URL}${PAYMENT_API_PATHS.CANCEL}/${buyInfoId}`,
    {
      method: HTTP_METHODS.POST,
      headers: {
        authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    },
    refreshPayload,
  );

  return data;
};
