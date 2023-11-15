import { useState } from "react";
import { TERipple } from "tw-elements-react";

const Button = ({ text, onClick, className, type }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const handleClick = () => {
    if (onClick) onClick();
    toggleShow();
  };

  return (
    <TERipple rippleColor="light">
      <button
        onClick={handleClick}
        className={`base_btn ${className}`}
        type={type}>
        {text}
      </button>
    </TERipple>
  );
};

export default Button;
