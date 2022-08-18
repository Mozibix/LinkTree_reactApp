import React from "react";
import "./styles/mainpage.scss";
import { LoginPage } from "./Pages/LoginPage";
import { NavBar } from "./Pages/NavBar";

const MainPage = () => {
  return (
    <>
      <div className="main_page">
        <div className="main_page_inner">
          <nav>
            <NavBar />
          </nav>

          <section>
            <LoginPage />
          </section>
        </div>
      </div>
    </>
  );
};

export default MainPage;
