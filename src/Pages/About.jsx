import React from "react";
import { Navbar, AboutMain } from "../Components";

const About = () => {
  return (
    <div className="bg-white flex flex-col h-screen">
      <Navbar />
      <div class="w-[97%] h-px bg-gray-200 mx-auto"></div>
      <div className="pt-40 grow ">
        <AboutMain />
      </div>
    </div>
  );
};

export default About;
