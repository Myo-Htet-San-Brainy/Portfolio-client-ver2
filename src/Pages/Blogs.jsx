import React from "react";
import { Blog, SectionTitle } from "../Components";
import { useBlogs } from "../Context";

const Blogs = () => {
  const blogs = useBlogs();
  if (blogs.length === 0) {
    return (
      <div className="py-20 h-screen" id="blogs">
        <SectionTitle text={"Blogs For You"} color={"border-orange-400"} />
        {/* a div that serves two reasons - 1.To layout children based on screen
      size, to center children across screen horizontally */}
        <div className="text-center pt-12 text-2xl">No Blogs For Now</div>
      </div>
    );
  }
  return (
    <div className="py-20 " id="blogs">
      <SectionTitle text={"Blogs For You"} color={"border-orange-400"} />
      {/* a div that serves two reasons - 1.To layout children based on screen
      size, to center children across screen horizontally */}
      <div className="w-[80%] max-w-screen-xl mx-auto pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((blog) => {
          return <Blog key={blog._id} {...blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
