import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../globalState/auth-store";

const RootLayout = () => {
  const { token } = useAuthStore();
  return (
    <>
      {!token ? (
        <Navigate to="/sign-in" />
      ) : (
        <div className="w-full">
          <Header />
          <section className="">
            <Outlet />
          </section>
        </div>
      )}
    </>
  );
};

export default RootLayout;
