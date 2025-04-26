import axios from 'axios';

// Base API URL - update with your actual API base URL
const API_BASE_URL = 'https://asia-northeast1-willeder-official.cloudfunctions.net/api'; // Update with your actual backend URL

// Create Axios instance for API requests
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get the access token from localStorage
const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

// Function to get the refresh token from localStorage
const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

// Add request interceptor to include access token in the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to refresh the access token using the refresh token
const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/refresh-token`, { refreshToken });
    const newAccessToken = response.data.accessToken;

    // Store new access token in localStorage
    localStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
  } catch (error) {
    throw new Error('Failed to refresh access token');
  }
};

// Add a response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Check if the error is due to an expired token (HTTP 401)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If refresh fails, logout the user
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // Redirect to login
      }
    }
    return Promise.reject(error);
  }
);

// API functions

// Login function - save tokens to localStorage
export const loginUser = async (email: string, password: string) => {
  const response = await axiosInstance.put('/auth/login', { email, password });
  const { accessToken, refreshToken } = response.data;

  // Store tokens in localStorage
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);

  return response.data; // Return tokens
};

// Register function
export const registerUser = async (email: string, password: string) => {
  const response = await axiosInstance.post('/auth/register', { email, password });
  return response.data;
};

// Fetch user data (example)
export const fetchUserData = async () => {
  const response = await axiosInstance.get('/user');
  return response.data;
};

// Logout function - clear tokens
export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  window.location.href = '/login'; // Redirect to login
};

export default axiosInstance;
