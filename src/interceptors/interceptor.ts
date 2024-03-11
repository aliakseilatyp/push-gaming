import axios from 'axios';
import ROUTES from 'constants/routes';

const baseURL = 'https://backoffice-gateway.jackpot-eu-dev.pushgaming.net';

axios.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem('at');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.baseURL = baseURL;
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('at');
      window.location.href = ROUTES.jackpots;
    }
    return Promise.reject(error);
  },
);

const magmaAxiosInstance = axios;

export default magmaAxiosInstance;
