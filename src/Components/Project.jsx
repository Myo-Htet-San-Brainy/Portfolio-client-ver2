import { FaGlobe } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { trimText } from "../utils/trimText";
import { useProject } from "../Context";

const Project = ({ img, name, text, gitHubLink, siteUrl }) => {
  const { setProject } = useProject();
  function launchProjectHandler() {
    setProject({
      img,
      name,
      text,
      gitHubLink,
      siteUrl,
    });
  }
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 bg-blue-400">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body text-white">
        <div className=" flex justify-between text-2xl">
          <a href={siteUrl} target="_blank">
            <FaGlobe className="hover:text-blue-600 transition-all duration-300" />
          </a>
          <a href={gitHubLink} target="_blank">
            <FaGithub className="hover:text-blue-600 transition-all duration-300" />
          </a>
        </div>
        <h2 className="mt-2 card-title font-bold h-16">
          {trimText(name) ? trimText(name) + " . . ." : name}
        </h2>
        <p className="font-light text-lg tracking-wide">
          {trimText(text) ? trimText(text) + " . . ." : text}
        </p>
        <button
          className="btn mt-2 text-blue-500 bg-white text-base hover:text-white hover:bg-blue-300 transition-all duration-300 border-none"
          onClick={launchProjectHandler}
        >
          Launch Project
        </button>
      </div>
    </div>
  );
};

export default Project;
