import React from "react";
import profileImg from '../images/profile_image.jpeg';

const Profile = () => {
    return <>
        <section className="profile_section">

        <div id="profile_img">
            <img src={profileImg} alt='profile photo'/>
            </div>
            
            <div id="twitter">
                <p>Opuz Moses</p>
            </div>

            {/* HIDDED SECTION*/}
            <div id="slack">
                <p>Moses Slack</p>
            </div>

        </section>
  </>;
};

export default Profile;
