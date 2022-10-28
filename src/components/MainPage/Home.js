import React from "react";
import Footer from "../Footer-Section/Footer";
import LinkSec from "../Links-Section/LinkSec";
import Profile from "../Profile-Section/Profile";
import SocialSec from "../Social-Section/SocialSec";

const Home = () => {
  return (
    <>
      <section className="home">
        <section className="user_profile">
          <Profile />
        </section>

        <section className="anchor_tag">
          <LinkSec />
        </section>

              <section className="social_sec">
                  <SocialSec/>
              </section>

              <section className="footer_sec">
                  <Footer/>
              </section>
      </section>
    </>
  );
};

export default Home;
