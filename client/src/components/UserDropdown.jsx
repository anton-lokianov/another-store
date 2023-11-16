import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "../globalState/auth-store";

const UserDropdown = ({ image, email, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLogout } = useAuthStore();

  const dropdownRef = useRef();

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownClasses = isOpen
    ? "opacity-100 scale-100 visible"
    : "opacity-0 scale-95 invisible delay-200";

  return (
    <div className="relative" ref={dropdownRef}>
      <img
        onClick={handleToggle}
        src={image}
        alt="user photo"
        className={`w-10 h-10 object-center rounded-full object-cover cursor-pointer bg-transparent border-2 border-neutral-300
        ${
          isOpen ? "ring-4 ring-slate-600" : "ring-0"
        } transition ease-in-out duration-300`}
      />

      <div
        className={`absolute top-12 right-0  text-neutral-300 bg-slate-700 border border-gray-600 rounded-sm shadow-md
        transition-all duration-300 transform ${dropdownClasses} flex flex-col`}>
        <div className="px-2 py-1 border-b border-gray-500 text-white flex gap-1 flex-col">
          <span className="flex">{name}</span>
          <span>{email}</span>
        </div>
        <Link to="" className="block p-2 hover:bg-slate-800 hover:text-white">
          Profile
        </Link>
        <Link
          onClick={() => setLogout()}
          to="/sign-in"
          className="block p-2 hover:bg-slate-800 hover:text-white">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default UserDropdown;
