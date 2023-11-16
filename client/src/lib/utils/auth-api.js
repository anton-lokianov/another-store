import axios from "axios";

const AUTH_URL = "https://dummyjson.com/auth/login";
const USER_URL = "https://dummyjson.com/users";

export const fetchLogin = async (credentials) => {
  try {
    const response = await axios.post(AUTH_URL, credentials);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchGetUserById = async (id) => {
  try {
    const response = await axios.get(`${USER_URL}/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error getting user:", error.response?.data || error.message);
    throw error;
  }
};
