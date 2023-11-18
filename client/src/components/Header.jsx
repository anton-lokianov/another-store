import { FaShopify } from "react-icons/fa";
import UserDropdown from "../components/UserDropdown";
import { useAuthStore } from "../globalState/auth-store";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { user } = useAuthStore();
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div
      className="w-full py-7 px-6 md:px-40 flex justify-between items-center z-40 bg-slate-700 backdrop-filter 
        backdrop-blur-lg bg-opacity-30 border-b border-gray-600 sticky top-0"
    >
      <div className="flex items-center gap-2">
        <h2 className="h2 hidden lg:block">Super Duper Shop</h2>
        <FaShopify className="text-neutral-400 text-[2.4rem]" />
      </div>
      <div className="flex items-center relative gap-3">
        <UserDropdown
          image={user.image}
          name={fullName}
          email={user.email}
          id={user.id}
        />
        <div className="relative">
          <div
            className="absolute -top-3 -right-4 text-white w-5 h-5 bg-red-700 rounded-full flex items-center justify-center text-xs
            border border-gray-500 shadow-lg"
          >
            <span>8</span>
          </div>
          <FaShoppingCart className="text-neutral-200 cursor-pointer text-[1.8rem]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
