import React from "react";
import zuri from "../images/zuri_logo.png";
import i4g from "../images/I4G.png";
import "../Styles/footer.scss";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="inner">
          <div className="logo zuri_logo">
            <img src={zuri} alt="zuri-logo" />
          </div>
          <div className="logo footer_text">
            <p>HNG Internship 9 Frontend Task</p>
          </div>
          <div className="logo i4g_logo">
            <img src={i4g} alt="i4g-logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
