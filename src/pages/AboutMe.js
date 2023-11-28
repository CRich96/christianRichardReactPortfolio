import React from "react";
// import myImage from ".../public/profilePic";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <img
        src=".../profilePic"
        alt="Profile Image Christian"
        id="chrisProfileImage"
      />
      <p className="aboutMe">
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