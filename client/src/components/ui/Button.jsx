import { useState } from "react";
import { TERipple } from "tw-elements-react";

const Button = ({ children, onClick, className, type }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const handleClick = () => {
    if (onClick) onClick();
    toggleShow();
  };

  return (
    <TERipple rippleColor="light" className={`base_btn ${className}`}>
      <button
        onClick={handleClick}
        className={`px-6 py-2 w-full uppercase `}
        type={type}
      >
        {children}
      </button>
    </TERipple>
  );
};

export default Button;
