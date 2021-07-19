const CLIENT_ID = 'bfa7da56d9995e5a35fdd046e6758a58';
const REDIRECT_URI = 'http://localhost:3000/signup';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
