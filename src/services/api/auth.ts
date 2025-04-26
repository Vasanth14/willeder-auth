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
export const registerUser = async (
    name: string,
    phone: string,
    address: string,
    email: string,
    password: string
) => {
    const response = await axiosInstance.post('/auth/register', {
        name,
        phone,
        address,
        email,
        password,
    });
    return response.data;
};


export const forgotPassword = async (email: string) => {
    try {
        const response = await axiosInstance.put('/auth/password/forgot', { email });
        return {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            data: response.data,
            config: response.config
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Return error response if available
            if (error.response) {
                return {
                    status: error.response.status,
                    statusText: error.response.statusText,
                    headers: error.response.headers,
                    data: error.response.data,
                    config: error.config
                };
            }
            throw error;
        }
        throw new Error('Unknown error occurred');
    }
};

export const resetPassword = async (tokenId: string, password: string) => {
    try {
        const response = await axiosInstance.put(
            '/auth/password/reset',
            { tokenId, password },
            {
                // Ensure we get the full response even for error statuses
                validateStatus: (status) => status < 500
            }
        );

        // Debug logging
        console.log('Reset Password Response:', {
            status: response.status,
            data: response.data,
            headers: response.headers
        });

        // Handle different success scenarios
        if (response.status === 200 || response.status === 204) {
            // For empty responses (204 No Content)
            if (response.status === 204) {
                return { success: true, message: 'Password reset successfully' };
            }
            // For responses with data
            return response.data;
        }

        // Handle expected error statuses
        if (response.status === 400) {
            throw new Error(response.data?.message || 'Invalid request');
        }
        if (response.status === 401) {
            throw new Error(response.data?.message || 'Invalid or expired token');
        }
        if (response.status === 404) {
            throw new Error(response.data?.message || 'User not found');
        }

        throw new Error(response.data?.message || 'Unknown error occurred');

    } catch (error) {
        // Enhanced error handling
        if (axios.isAxiosError(error)) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Reset Password Error:', {
                    status: error.response.status,
                    data: error.response.data,
                    headers: error.response.headers
                });

                // Handle empty error responses
                if (!error.response.data) {
                    switch (error.response.status) {
                        case 401:
                            throw new Error('Your reset link has expired');
                        case 400:
                            throw new Error('Invalid password format');
                        default:
                            throw new Error(`Request failed with status ${error.response.status}`);
                    }
                }

                throw new Error(
                    error.response.data?.message ||
                    error.response.data?.error ||
                    `Password reset failed (${error.response.status})`
                );
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                throw new Error('No response from server. Please check your connection.');
            }
        }

        // Non-Axios errors
        console.error('Non-Axios error:', error);
        throw new Error('An unexpected error occurred');
    }
};

// Fetch user data (example)
export const fetchUserData = async () => {
    const response = await axiosInstance.get('/lists');
    return response.data;
};

// Logout function - clear tokens
export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login'; // Redirect to login
};

export default axiosInstance;
