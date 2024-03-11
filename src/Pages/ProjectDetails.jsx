import React from "react";
import { useProject } from "../Context";
import { GradientText } from "../Components";
import { FaGlobe } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { project, setProject } = useProject();
  const { img, name, text, gitHubLink, siteUrl } = project;
  function handleBack() {
    setProject({});
  }
  return (
    <div className="bg-white py-16">
      <div className="w-4/5 mx-auto max-w-screen-md">
        <button
          className="btn px-7  text-white bg-gradient-to-r from-blue-400 to-orange-400 border-none hover:text-black transition-all duration-300"
          onClick={handleBack}
        >
          Back
        </button>
        <div className="mt-8 text-3xl">
          <GradientText text={name} />
        </div>
        <div className="mt-8 flex justify-start gap-3 text-2xl">
          <a href={siteUrl} target="_blank">
            <FaGlobe className="hover:text-blue-600 transition-all duration-300" />
          </a>
          <a href={gitHubLink} target="_blank">
            <FaGithub className="hover:text-blue-600 transition-all duration-300" />
          </a>
        </div>
        <img
          src={img}
          alt={"Project image"}
          className="mt-8 w-3/4 h-64 object-cover rounded-lg"
        />
        <p className="mt-8 text-black font-light text-lg tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
