import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const {theme} = useContext(ThemeContext);


  return (
    <div className ={`${theme === "light" ? "bg-grey-300 text-black": "bg-grey-700 text-white"}border-2`}
    >
      <ul className="flex justify-around">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
      
    </div>
  );
};

export default Header
