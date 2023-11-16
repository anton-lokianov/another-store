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
    const { mutate, isPending, isError } = useMutation({
      mutationKey: "auth",
      mutationFn: (user) => fetchLogin(user),
      onSuccess: (data) => {
        const { username, firstName, lastName, image, id, token, email } = data;
        setLogin({ username, firstName, lastName, image, id, email }, token);
      },
    });

    return { mutate, isPending, isError };
  };

  const getUserQuery = (userId) => {
    const { data, isPending, isError } = useQuery({
      queryKey: ["user", userId],
      queryFn: () => fetchGetUserById(userId),
      enabled: !!userId,
    });

    return { data, isPending, isError };
  };

  const getProductCategoriesQuery = () => {
    const { data, isPending, isError } = useQuery({
      queryKey: ["productCategories"],
      queryFn: fetchGetProductCategories,
    });

    return { data, isPending, isError };
  };

  const getProductsByCategoryQuery = (category) => {
    const { data, isPending, isError } = useQuery({
      queryKey: ["product", category],
      queryFn: fetchGetProductsByCategory(category),
    });

    return { data, isPending, isError };
  };

  const getProductsQuery = () => {
    const { data, isPending, isError } = useQuery({
      queryKey: ["products"],
      queryFn: fetchGetProducts,
    });

    return { data, isPending, isError };
  };

  return {
    loginQuery,
    getUserQuery,
    getProductCategoriesQuery,
    getProductsByCategoryQuery,
    getProductsQuery,
  };
};
