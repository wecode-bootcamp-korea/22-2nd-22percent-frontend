const TOKEN_KEY = 'access_token';

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) || null;
};

const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export { getToken, setToken };
