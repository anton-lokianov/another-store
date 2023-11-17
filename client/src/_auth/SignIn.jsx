import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { CgLogIn } from "react-icons/cg";
import { useLoginFormValid } from "../lib/validations/loginForm-valid";
import { FiUser, FiLock } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useAppQueries } from "../lib/react-query/queries";

const SignIn = () => {
  const { register, handleSubmit, errors, reset, validationSchema, setValue } =
    useLoginFormValid();
  const [randomUserId, setRandomUserId] = useState(null);
  const { loginQuery, getUserQuery } = useAppQueries();
  const { mutate: authenticate, isPending: isAuthPending } = loginQuery();
  const { data: user, isPending: isUserPending } = getUserQuery(randomUserId);

  const handleGenerateRandomUser = () => {
    const newRandomId = Math.floor(Math.random() * 100) + 1;
    setRandomUserId(newRandomId);
  };
  useEffect(() => {
    if (user) {
      setValue("username", user.username);
      setValue("password", user.password);
    }
  }, [user]);

  const submit = handleSubmit((formData) => {
    authenticate({ ...formData });
  });

  return (
    <div className="p-10 flex flex-col items-center border border-gray-500 rounded-sm bg-slate-700 w-full max-w-sm shadow-sm shadow-black">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <CgLogIn className="h-14 w-14 text-indigo-500 mt-2" />
      <form onSubmit={submit} className="flex flex-col gap-3 w-full">
        <Input
          label="username"
          {...register("username", validationSchema.username)}
          error={errors.username}
          icon={<FiUser />}
        />
        <Input
          label="password"
          type="password"
          {...register("password", validationSchema.password)}
          error={errors.password}
          icon={<FiLock />}
        />
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="submit"
            text={isAuthPending ? "Singing..." : "Sign in"}
            className="prime_btn"
          />
          <Button
            type="button"
            onClick={() => reset()}
            text="Reset"
            className="sec_btn"
          />
        </div>
        <Button
          type="button"
          onClick={handleGenerateRandomUser}
          text={
            randomUserId && isUserPending
              ? "Generating.."
              : "Generate Random User"
          }
          className="sec_btn"
        />
      </form>
    </div>
  );
};

export default SignIn;
