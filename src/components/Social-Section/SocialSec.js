import React from "react";
import "../Styles/socialsec.scss";
import git from "../images/git.png";
import slack from "../images/slack.png";

const SocialSec = () => {
  return (
    <>
      <section className="social_sec">
        <ul>
          <li>
            <img src={slack} alt="slack" />
          </li>
          <li>
            <img src={git} alt="git" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default SocialSec;
