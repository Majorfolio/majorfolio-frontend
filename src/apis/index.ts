const fetchWithEnvironment = (url: string, options?: RequestInit) => {
  const currentURL = window.location.href;

  if (currentURL.includes('majorfolio')) {
    return fetch(url, options);
  }

  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      'ngrok-skip-browser-warning': '69420',
    },
  });
};

export default fetchWithEnvironment;
