import { FaShopify } from "react-icons/fa";
import UserDropdown from "../components/UserDropdown";
import { useAuthStore } from "../globalState/auth-store";

const Header = () => {
  const { user } = useAuthStore();
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div
      className="w-full py-4 px-6 flex justify-between items-center fixed top-0 z-40 bg-slate-700 backdrop-filter 
        backdrop-blur-lg bg-opacity-30 border-b border-gray-600 sm:px-12">
      <div className="flex items-center gap-2">
        <span className="h2 hidden xl:block">Super Duper Shop</span>
        <FaShopify className="text-neutral-400 text-[2.4rem]" />
      </div>
      <div className="flex items-center relative">
        <UserDropdown image={user.image} name={fullName} email={user.email} />
      </div>
    </div>
  );
};

export default Header;
