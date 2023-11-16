import { useForm } from "react-hook-form";

export const useLoginFormValid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Define your validation schema here
  const validationSchema = {
    username: {
      required: "username is required",
    },
    password: {
      required: "Last name is required",
    },
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    validationSchema,
    setValue,
  };
};
