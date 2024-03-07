import React from "react";
import { Blog, SectionTitle } from "../Components";

const Blogs = () => {
  const blogs = [
    {
      _id: "655f5f7eed9d55079f5f0509",
      img: "https://res.cloudinary.com/dhwwdk7uq/image/upload/v1690823157/21daysUserImages/file_bwxexw.jpg",
      name: "Connect Thailand",
      text: "Built this for a university assignment. It's about digital divide in Thailand and how to reduce it. Used React, Tailwind CSS, Daisy UI and React Router Dom library.",
      readTime: "3 mins read",
      createdAt: "2023-11-23T14:19:42.669Z",
      updatedAt: "2023-11-23T14:19:42.669Z",
      __v: 0,
    },
  ];

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
