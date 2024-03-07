import { FaGlobe } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Project = ({ img, name, text, gitHubLink, siteUrl }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 bg-blue-400">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="font-light text-lg tracking-wide">{text}</p>
        <div className="mt-2 flex justify-between text-2xl">
          <a href={siteUrl}>
            <FaGlobe className="hover:text-blue-600 transition-all duration-300" />
          </a>
          <a href={gitHubLink}>
            <FaGithub className="hover:text-blue-600 transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
