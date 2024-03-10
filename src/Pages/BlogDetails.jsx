import React from "react";
import { useBlog } from "../Context";
import { GradientText } from "../Components";

const BlogDetails = () => {
  const { blog, setBlog } = useBlog();
  const { name, text, img, readTime, monthsAgo } = blog;
  function handleBack() {
    setBlog({});
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
        <div className="mt-8">
          <p className="font-bold text-black capitalize">{readTime}</p>
          <p className="font-bold text-black capitalize">
            {monthsAgo === 0 ? "Just moment ago" : `${monthsAgo} months ago`}
          </p>
        </div>
        <img
          src={img}
          alt={"Blog image"}
          className="mt-8 w-3/4 h-64 object-cover rounded-lg"
        />
        <p className="mt-8 text-black font-light text-lg tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
