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