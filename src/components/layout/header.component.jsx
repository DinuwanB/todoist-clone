import React from "react";
import { DiAtom } from "react-icons/di"

const Header = () => {
  const x = 1;

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todolist" />
        </div>
        <div className="setting">
          <ul>
            <li>+</li>
            <li><DiAtom/></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
