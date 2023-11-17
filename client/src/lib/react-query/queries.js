import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../globalState/auth-store";
import { fetchGetUserById, fetchLogin } from "../utils/auth-api";
import {
  fetchGetProductCategories,
  fetchGetProducts,
  fetchGetProductsByCategory,
} from "./../utils/products-api";

export const useAppQueries = () => {
  const { setLogin } = useAuthStore();

  const loginQuery = () => {
    return useMutation({
      mutationKey: "auth",
      mutationFn: (user) => fetchLogin(user),
      onSuccess: (data) => {
        const { username, firstName, lastName, image, id, token, email } = data;
        setLogin({ username, firstName, lastName, image, id, email }, token);
      },
    });
  };

  const getUserQuery = (userId) => {
    return useQuery({
      queryKey: ["user", userId],
      queryFn: () => fetchGetUserById(userId),
      enabled: !!userId,
    });
  };

  const getProductCategoriesQuery = () => {
    return useQuery({
      queryKey: ["productCategories"],
      queryFn: fetchGetProductCategories,
    });
  };

  const getProductsByCategoryQuery = (category) => {
    return useQuery({
      queryKey: ["product", category],
      queryFn: fetchGetProductsByCategory(category),
    });
  };

  const getProductsQuery = () => {
    return useQuery({
      queryKey: ["products"],
      queryFn: fetchGetProducts,
    });
  };

  return {
    loginQuery,
    getUserQuery,
    getProductCategoriesQuery,
    getProductsByCategoryQuery,
    getProductsQuery,
  };
};
