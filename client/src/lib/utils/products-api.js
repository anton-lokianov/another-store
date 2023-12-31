import axios from "axios";

const BASE_API = "https://dummyjson.com/products";

export const fetchGetProducts = async () => {
  try {
    const response = await axios.get(`${BASE_API}?skip=0&limit=100`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchDeleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_API}/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchGetProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_API}/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error fetching product by ID:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchUpdateProduct = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_API}/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error updating product:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchCreateProduct = async (data) => {
  try {
    const response = await axios.post(`${BASE_API}/add`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error creating product:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchSearchProducts = async (query) => {
  try {
    const response = await axios.get(`${BASE_API}/search?q=${query}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error searching products:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchGetProductCategories = async () => {
  try {
    const response = await axios.get(`${BASE_API}/categories`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error fetching product categories:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchGetProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_API}/category/${category}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      `Error fetching products in category ${category}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};
