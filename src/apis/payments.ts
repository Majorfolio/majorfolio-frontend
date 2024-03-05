import { access } from 'fs';
import { Order } from '../components/home/Payment/index.types';
import { HTTP_METHODS } from './constants';
import { RetryPayload, fetchWithTokenRetry } from './member';

export const updateBuyInfo = async (
  authStore: string,
  buyInfo: Order,
  refreshPayload: RetryPayload,
) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authStore}`,
      },
      body: JSON.stringify(buyInfo),
    };
    return await fetchWithTokenRetry(
      `https://majorfolio-server.shop/payments/info`,
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
    `https://majorfolio-server.shop/payments/info/${buyInfoId}`,
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
      `https://majorfolio-server.shop/payments/cancel/${buyInfoId}`,
      requestOptions,
      refreshPayload,
    );
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getBuyTransaction = async (
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
    `https://majorfolio-server.shop/transaction/buy?page=${page}&pageSize=${pageSize}`,
    requestOptions,
    refreshPayload,
  );

  return data;
};

export const getSaleTransaction = async (
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
    `https://majorfolio-server.shop/sale/buy?page=${page}&pageSize=${pageSize}`,
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
    `${process.env.REACT_APP_API_URL}/payments/cancel/${buyInfoId}`,
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
