import { Navigate } from "react-router-dom";
import { useAuthStore } from "../globalState/auth-store";
import SignIn from "./SignIn";
import loginImg from "../assets/login.png";

const AuthLayout = () => {
  const { token, user } = useAuthStore();

  return (
    <>
      {token && user ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center py-6">
            <SignIn />
          </section>
          <img
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat bg-center"
            src={loginImg}
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
