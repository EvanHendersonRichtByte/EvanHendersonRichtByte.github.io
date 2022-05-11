import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { slideInLeft, fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";
import Avatar from "../assets/img/person.jpg";
const Profile = (props) => {
  const [imageTrigger, setImageTrigger] = useState("");
  const [paragraphTrigger, setParagraphTrigger] = useState("");
  const handleWaypointEnter = () => {
    setTimeout(() => {
      setImageTrigger("yes");
      setParagraphTrigger("yes");
    }, 300);
  };
  const slideInL = keyframes`${slideInLeft}`;
  const LeftImageAnim = styled.div`
    animation: 2s ${slideInL};
  `;
  const fadeInR = keyframes`${fadeInRight}`;
  const RightParagraphAnim = styled.div`
    animation: 2s ${fadeInR};
  `;
  return (
    <section
      id="section-profile"
      className="section-profile container text-center my-4"
    >
      <Waypoint onEnter={handleWaypointEnter} />
      <div className="profile-header ">
        <h3 className="text-main">About Me</h3>
        <hr className="border-main" />
      </div>
      <div className="profile-content container">
        <div className="row">
          {imageTrigger === "yes" && (
            <LeftImageAnim>
              <div className="profile-content-left col-md-4">
                <img
                  className="profile-image rounded mt-4"
                  src={Avatar}
                  alt="Me"
                />
              </div>
            </LeftImageAnim>
          )}

          <div className="profile-content-right col-md-8">
            <table className="table table-borderless text-left">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>Galur Arasy Lumintang</td>
                </tr>
                <tr>
                  <th>Date of Birth:</th>
                  <td>May 08, 2003</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>adamhenderson3x3@gmail.com</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>Jl. Wendit Barat no.18, Malang, Jawa Timur, Indonesia</td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td>+62 82141413537</td>
                </tr>
              </tbody>
            </table>
            {paragraphTrigger === "yes" && (
              <RightParagraphAnim>
                <p className="pt-4">
                  Im a passionate technology learner from Indonesia
                </p>
              </RightParagraphAnim>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
