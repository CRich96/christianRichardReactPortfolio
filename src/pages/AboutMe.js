import React from "react";
import "./pages.css";
import ProfilePic from "../assets/profilePic.png";

export default function AboutMe() {
  return (
    <div className="aboutMe aboutMeContainer">
      <img src={ProfilePic}
      className="profile-picture" alt="profile" />
      <p className="aboutMe text">
        Hi, I'm Christian, full-stack web developer.
        <br />
        I am in this industry to solve real-world problems with my applications.
        <br />
        I am currently based in Dallas, TX.
        <br />
        You are welcome to look around.
      </p>
    </div>
  );
}