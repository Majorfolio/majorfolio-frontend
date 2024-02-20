import { Order } from "../components/home/Payment/index.types";

export const updateBuyInfo = async (authStore: string, buyInfo: Order) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authStore}`
      },
      body: JSON.stringify(buyInfo),
    }
    return await fetch(`https://majorfolio-server.shop/payments/info`, requestOptions);    
  } catch (e) { 
    return Promise.reject(e);
  };

};

export const getBuyInfo = async (authStore: string, buyInfoId: number) => {
  // const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authStore}`
    }
  };

  const response = await fetch(`https://majorfolio-server.shop/payments/info/${buyInfoId}`, requestOptions);
  const data = await response.json();
  return data;
};

export const updateCancel = async (authStore: string, buyInfoId: number) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authStore}`
      },
      body: JSON.stringify({}),
    }
    return await fetch(`https://majorfolio-server.shop/payments/cancel/${buyInfoId}`, requestOptions);    
  } catch (e) { 
    return Promise.reject(e);
  };

};

export const getBuyTransaction = async (page: number, pageSize: number, authStore: string) => {
  // const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authStore}`
    }
  };
  
  const response = await fetch(`https://majorfolio-server.shop/transaction/buy?page=${page}&pageSize=${pageSize}`, requestOptions);
  const data = await response.json();
  return data;
};

export const getSaleTransaction = async (page: number, pageSize: number, authStore: string) => {
  // const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authStore}`
    }
  };
  
  const response = await fetch(`https://majorfolio-server.shop/sale/buy?page=${page}&pageSize=${pageSize}`, requestOptions);
  const data = await response.json();
  return data;
};