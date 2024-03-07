import React from "react";
import { getMonthDiff } from "../utils/monthDiff";

const Blog = ({ name, text, img, readTime, createdAt }) => {
  const monthsAgo = getMonthDiff(createdAt);

  return (
    <a href="">
      <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 bg-orange-400">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="font-light text-lg tracking-wide">{text}</p>
          <div className="mt-2 flex justify-between text-sm">
            <h1>{readTime}</h1>
            <h1>{monthsAgo + " months ago"}</h1>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Blog;
