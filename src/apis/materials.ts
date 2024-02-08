export const getAllUniv = async () => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ`);
  const data = await response.json();
  return data;
};

export const getAllUnivNewlyViewAll = async (page: number) => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ/newly-upload/${page}`);
  const data = await response.json();
  return data;
};

export const getAllUnivBestViewAll = async (page: number) => {
  const response = await fetch(`https://majorfolio-server.shop/home/all/univ/likes/${page}`);
  const data = await response.json();
  return data;
};