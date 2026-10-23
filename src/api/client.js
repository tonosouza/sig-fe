import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // imprescindible para enviar/recibir cookies HttpOnly
});

let isRefreshing = false;
let pendingRequests = [];

function resolvePending(error) {
  pendingRequests.forEach(({ resolve, reject }) => (error ? reject(error) : resolve()));
  pendingRequests = [];
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    const isAuthEndpoint = config?.url?.includes('/auth/login') || config?.url?.includes('/auth/refresh');

    if (response?.status === 401 && !config._retry && !isAuthEndpoint) {
      config._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingRequests.push({ resolve, reject });
        }).then(() => api(config));
      }

      isRefreshing = true;
      try {
        await api.post('/auth/refresh');
        isRefreshing = false;
        resolvePending(null);
        return api(config);
      } catch (refreshError) {
        isRefreshing = false;
        resolvePending(refreshError);
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
