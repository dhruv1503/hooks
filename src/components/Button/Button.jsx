import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Button = ({
  onClick = () => {},
  buttonText = "button",
  className = "",
}) => {
    const theme = useContext(ThemeContext)
  return (
    <button className={`button--${theme}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};
