import React from "react";

const Input = React.forwardRef(({ name, label, icon, error, ...rest }, ref) => {
  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={name}
          className="block text-md font-bold text-gray-400 mb-1">
          {label}
        </label>
      )}
      <div className="flex items-center">
        <input
          ref={ref}
          id={name}
          name={name}
          {...rest}
          className="px-2 py-[5px] w-full border rounded-md outline-none transition duration-150 ease-in-out focus:border-indigo-500 
          focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:bg-slate-50"
        />
        {icon && (
          <div className="absolute right-1">
            {React.cloneElement(icon, { className: "h-6 w-6 text-slate-900" })}
          </div>
        )}
      </div>
      <div className="h-5">
        {error && (
          <p className="text-red-600 text-[0.8rem] italic">{error.message}</p>
        )}
      </div>
    </div>
  );
});

export default Input;
