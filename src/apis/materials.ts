export const getAllUnivHome = async () => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ`);
  const data = await response.json();
  return data;
};

export const getAllUnivNewly = async (page: number) => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ/newly-upload/${page}`);
  const data = await response.json();
  return data;
};

export const getAllUnivBest = async (page: number) => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ/likes/${page}`);
  const data = await response.json();
  return data;
};