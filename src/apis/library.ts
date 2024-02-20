const LIBRARY_COMMON_SEGMENT = 'library';

const LIBRARY_PATH_SEGMENTS = {
  PURCHASED: '/library/buy',
  UPLOADED: '/library/upload',
};

const getPurchaseInfo = async (
  page: number,
  pageSize: number,
  accessToken: string,
) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
  });

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${LIBRARY_PATH_SEGMENTS.PURCHASED}?${queryParams}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  );
  const data = response.json();

  return data;
};
export default getPurchaseInfo;
