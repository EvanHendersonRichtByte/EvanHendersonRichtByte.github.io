import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook, FiSmartphone, FiTwitter } from "react-icons/fi";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { Waypoint } from "react-waypoint";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import { init, send } from "emailjs-com";

const Contact = () => {
  // ? State Declaration
  const [state, setState] = useState({
    user_name: "",
    user_email: "",
    message: "",
    to_name: "Evan Henderson",
    reply_to: "No one",
  });
  const { user_name, user_email, message } = state;
  const [contactTrigger, setContactTrigger] = useState("");
  // ! Function and Anim Declaration
  const handleInput = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });
  const handleWaypointEnter = () => setContactTrigger("yes");

  const EmailAnimR = keyframes`${pulse}`;
  const EmailAnim = styled.td`
    animation: 1.5s ${EmailAnimR};
  `;
  // * EmailJS Integration
  init("user_9rgWJ9bLGKwR8ijemGaxL");
  let templateParams = { user_name, user_email, message };
  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_wwffwm4", "template_hknpbnd", templateParams).then(
      (res) => {
        console.log("Success!", res.status);
        window.location.reload();
      },
      (err) => console.log("Failed", err)
    );
  };

  const ContactList = () => (
    <tbody>
      <tr className="row">
        <td>
          <HiOutlineMail className="text-main" />
        </td>
        <td>adamhenderson3x3@gmail.com</td>
      </tr>
      <tr className="row">
        <td>
          <FiSmartphone className="text-main" />
        </td>
        <td>+62 66123121312</td>
      </tr>
      <tr className="row">
        <td>
          <VscLocation className="text-main" />
        </td>
        <td>Malang, East Java, Indonesia</td>
      </tr>
    </tbody>
  );

  return (
    <section id="section-contact" className="section-contact">
      <div className="contact container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5">
              <div className="row">
                <div className="col-md-6">
                  <h3>TALK TO ME</h3>
                  <p className="mb-3">
                    I am a student who specializes in Front End Developer. I
                    work with individuals and couples to help them build their
                    websites. I'm a full-time student who is just looking for
                    someone to talk to.
                  </p>
                  <table className="table table-borderless">
                    {contactTrigger === "yes" ? (
                      <EmailAnim>
                        <ContactList />
                      </EmailAnim>
                    ) : (
                      <ContactList />
                    )}
                  </table>
                </div>
                <div className="col-md-4 offset-md-1 bg-light">
                  <h3 className="mb-3">SAY SOMETHING</h3>
                  <form onSubmit={handleSubmit} className="form shadow-lg">
                    <div className="form-group">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control border-main"
                        value={user_name}
                        placeholder="Your Name"
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control border-main"
                        placeholder="Your Email"
                        value={user_email}
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        className="form-control border-main"
                        value={message}
                        onChange={handleInput}
                        placeholder="Message..."
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-block btn-main">
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-footer container-fluid bg-main text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Waypoint onEnter={handleWaypointEnter} />
              <h4>About Me</h4>
              <p>
                I am a college student studying technology, and I am waiting to
                hear from you to cooperate in the development of applications!
              </p>
            </div>
            <div className="col-md-6 d-flex">
              <div className="row">
                <h4 className="ml-3">Contact</h4>
                <div className="col-md-12 d-flex align-items-center">
                  <div>
                    <a
                      className="text-light d-flex align-items-center"
                      href="mailto:adamhenderson3x3@gmail.com"
                      target="__blank"
                    >
                      <HiOutlineMail />
                      <span className="ml-2">Adamhenderson3x3@gmail.com</span>
                    </a>
                    <a
                      className="d-block w-100 text-light d-flex align-items-center"
                      href="https://www.linkedin.com/in/galurarasy"
                      target="__blank"
                    >
                      <AiOutlineLinkedin />
                      <span className="ml-2">Galur Arasy Lumintang</span>
                    </a>
                  </div>
                </div>
                <div className="mt-3 col-md-12 d-flex align-items-center">
                  <FiFacebook className="footer-icon" />
                  <FiTwitter className="ml-4 footer-icon" />
                  <a
                    href="https://github.com/EvanHendersonRichtByte/"
                    target="__blank"
                    className="ml-4 footer-link"
                  >
                    <AiOutlineGithub className="footer-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3 d-flex align-items-center">
              <p className=" mt-2">
                Copyright &copy;{new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
