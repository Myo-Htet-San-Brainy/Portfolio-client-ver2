import React from "react";
import { socialIcons } from "../data";
import { useLinks } from "../Context";

const Footer = () => {
  const links = useLinks();
  if (Object.keys(links).length !== 0 && !socialIcons[0].link) {
    socialIcons[0].link = links.facebook;
    socialIcons[1].link = links.github;
    socialIcons[2].link = links.linkedIn;
  }
  return (
    <div className="p-14 text-center">
      <div className="w-fit mx-auto flex space-x-7  text-xl text-black">
        {socialIcons.map((socialIcon) => {
          const { id, link, Component } = socialIcon;
          return (
            <a
              key={id}
              href={link}
              className="hover:text-blue-400 transition-all duration-200"
            >
              <Component />
            </a>
          );
        })}
      </div>
      <div className="mt-4 flex flex-col gap-2 text-sm font-bold">
        <div>
          <a
            href="mailto:myohtetsandrinksmilk@gmail.com"
            className="text-blue-400 hover:text-black transition-all duration-200"
          >
            myohtetsandrinksmilk@gmail.com
          </a>
        </div>
        <div>
          <a
            href="tel:+66994765425"
            className=" text-orange-400 hover:text-black transition-all duration-200"
          >
            +66994765425
          </a>
        </div>
      </div>

      <p className="mt-4 font-bol text-sm font-bold text-black">
        All rights reserved@{new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
