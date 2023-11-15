import Header from "../components/Header";
import SideBar from "./../components/SideBar";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../globalState/auth-store";

const RootLayout = () => {
  const { token, user } = useAuthStore();
  return (
    <>
      {!token && !user ? (
        <Navigate to="/sign-in" />
      ) : (
        <div className="w-full">
          <Header />
          <SideBar />
          <section>
            <Outlet />
          </section>
        </div>
      )}
    </>
  );
};

export default RootLayout;
