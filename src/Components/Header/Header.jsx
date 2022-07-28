import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../chart-line.svg";


const Header = () => {
  return (
    <header className={"header"}>
      
      <div className={"container"}>
        <div className={"logoContainer"}>
          <Logo className={"logo"} />
          <span>Stock Market analysis</span>
        </div>

        <div className={"userContainer"}>
          <div className={"user"}>A</div>
          <span>Abbas</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
