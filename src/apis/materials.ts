import useAuthStore from "../store/authStore";

export const getAllUniv = async () => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ`);
  const data = await response.json();
  return data;
};

export const getAllUnivNewlyViewAll = async (page: number, pageSize: number) => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ/newly-upload?page=${page}&pageSize=${pageSize}`);
  const data = await response.json();
  return data;
};

export const getAllUnivBestViewAll = async (page: number, pageSize: number) => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ/likes?page=${page}&pageSize=${pageSize}`);
  const data = await response.json();
  return data;
};

export const getMyUnivNewlyViewAll = async (page: number, pageSize: number) => {
  const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authStore}`
    }
  };
  
  const response = await fetch(`https://majorfolio-server.shop/home/my/univ/newly-upload?page=${page}&pageSize=${pageSize}`);
  const data = await response.json();
  return data;
};

export const getMyUnivBestViewAll = async (page: number, pageSize: number) => {
  const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authStore}`
    }
  };
  
  const response = await fetch(`https://majorfolio-server.shop/home/my/univ/likes?page=${page}&pageSize=${pageSize}`);
  const data = await response.json();
  return data;
};

export const getMyClassNewlyViewAll = async (page: number, pageSize: number) => {
  const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authStore}`
    }
  };
  
  const response = await fetch(`https://majorfolio-server.shop/home/my/major/newly-upload?page=${page}&pageSize=${pageSize}`);
  const data = await response.json();
  return data;
};

export const getMyClassBestViewAll = async (page: number, pageSize: number) => {
  const authStore = useAuthStore((state) => state.accessToken);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authStore}`
    }
  };
  
  const response = await fetch(`https://majorfolio-server.shop/home/my/major/likes?page=${page}&pageSize=${pageSize}`);
  const data = await response.json();
  return data;
};

export const getMaterialDetail = async (materialId: number) => {
  const response = await fetch(`https://majorfolio-server.shop/assignment/${materialId}/detail`);
  const data = await response.json();
  return data;
};

// TODO: 토큰 필요
export const updateLike = async (materialId: number) => {
  try {
    return await fetch(`https://majorfolio-server.shop/my/${materialId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });    
  } catch (e) { 
    // console.log('updateLike error');
    return Promise.reject(e);
  };

};