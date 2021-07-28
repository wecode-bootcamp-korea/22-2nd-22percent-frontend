const IP_ADDRESS = '13.124.4.250';
export const BASE_URL = `http://${IP_ADDRESS}:8000`;

export const MORTGAGE = '/deals?category=mortgage';
export const INDIVIDUAL = '/deals?category=individual';
export const LOAN_AMOUNT = '/deals/loan-amount';

export const INVESTMENTSINFO_API = `http://${IP_ADDRESS}:8000/investments?deals=1&deals=61`;
export const SIGNUP_API = `http://${IP_ADDRESS}:8000/users/signup`;
export const SIGNIN_API = `http://${IP_ADDRESS}:8000/users/signin`;
export const KAKAO_API = `http://${IP_ADDRESS}:8000/users/signin/kakao`;
export const HISTORY_API = `http://${IP_ADDRESS}:8000/investments/history`;
export const PORTFOLIO_API = `http://${IP_ADDRESS}:8000/investments/portfolio`;
export const SUMMARY_API = `http://${IP_ADDRESS}:8000/investments/summary`;

export const REALESTATEDETAIL = `${BASE_URL}/deals/`;
