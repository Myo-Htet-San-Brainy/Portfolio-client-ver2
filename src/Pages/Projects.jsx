import React from "react";
import { Project, SectionTitle } from "../Components";
import { useProjects } from "../Context";

const Projects = () => {
  const projects = useProjects();

  if (projects.length === 0) {
    return (
      <div className="py-20 h-screen" id="projects">
        <SectionTitle
          text={"Some Projects I've Crafted"}
          color={"border-blue-400"}
        />
        {/* a div that serves two reasons - 1.To layout children based on screen
      size, to center children across screen horizontally */}
        <div className="text-center pt-12 text-2xl">No Projects For Now</div>
      </div>
    );
  }

  return (
    <div className="py-20 " id="projects">
      <SectionTitle
        text={"Some Projects I've Crafted"}
        color={"border-blue-400"}
      />
      {/* a div that serves two reasons - 1.To layout children based on screen
      size, to center children across screen horizontally */}
      <div className="w-[80%] max-w-screen-xl mx-auto pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => {
          return <Project key={project._id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
