import React from "react";
import profileImg from "../images/profile_image.jpeg";
import mobile from "../images/mobile_icon.png";
import desktop from "../images/desktop_icon.png";

import "../Styles/profile.scss";

const Profile = () => {
  return (
    <>
      <section className="profile_section">
        <div className="user_info">
          <div id="profile_img">
            <img src={profileImg} alt="profile" />
          </div>

          <div id="twitter">
            <p>Opuz Moses</p>
          </div>

          {/* HIDDED SECTION*/}
          <div id="slack">
            <p>Moses Slack</p>
          </div>
        </div>

        <div className="icon_section">
          <img className="desktop_icon" src={desktop} alt="share" />
          <img className="mobile_icon" src={mobile} alt="share" />
        </div>
      </section>
    </>
  );
};

export default Profile;
