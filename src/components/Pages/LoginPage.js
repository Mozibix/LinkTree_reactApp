import React from "react";
import "../styles/loginpage.scss";
import left_img from "../images/img1.png";
import mail from "../images/mail_img.png";
import lock from "../images/lock.png";
import pass_mail from "../images/mail.png";

export const LoginPage = () => {
  return (
    <>
      <div className="login_main">
        <div className="login_main_inner">
          <div className="left_side">
            <div className="left_side_inner">
              <nav>
                <span>Logo</span>{" "}
                <ul>
                  <li className="login">Login</li>
                  <li className="sign_up">sign up</li>
                </ul>
              </nav>

              <div className="left_contents">
                <div className="header_text">
                  <p>sign in</p>
                </div>

                <div className="info_text">
                  <p>Sign in to continue with our app</p>
                </div>

                <form className="form_sec">
                  <div className="email_form">
                    <input
                      type="text"
                      placeholder="youremail@gmail.com"
                      name="email"
                      className="email"
                      required
                    />
                    <div className="mail_img">
                      <img src={mail} alt="mail" />
                    </div>
                  </div>

                  <div className="password_form">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="password"
                      required
                    />
                    <div className="lock_img">
                      <img src={lock} alt="lock" />
                    </div>
                  </div>
                </form>

                <div className="below_text">
                  <div className="pass_img">
                    <img src={pass_mail} alt="mail-box" />
                  </div>
                  <p>Forgot Password ?</p>
                </div>

                <button>Sign in</button>
              </div>
            </div>
          </div>

          <div className="right_side">
            <div className="right_side_img">
              <img src={left_img} alt="pics" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
