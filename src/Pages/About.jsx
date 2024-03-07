import React from "react";
import { Navbar, AboutMain, SeperationLine } from "../Components";

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <SeperationLine />
      <div className="pt-40 grow ">
        <AboutMain />
      </div>
    </div>
  );
};

export default About;
