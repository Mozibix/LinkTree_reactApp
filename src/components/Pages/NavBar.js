import React from "react";
import "../styles/navbar.scss";

export const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <span>Logo</span>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <button>Sign in</button>
        </nav>
      </div>
    </>
  );
};
