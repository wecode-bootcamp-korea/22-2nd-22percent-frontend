const TOKEN_KEY = 'accessToken';

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) || null;
};

const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export { getToken, setToken };
