import { GradientText, NavLink } from "./index";
import { navLinks, socialIcons } from "../data";

const Navbar = () => {
  return (
    <div className="px-10">
      <div className="lg:hidden text-center py-6 italic text-3xl ">
        <GradientText text={"Brainy"} />
      </div>
      <div className="hidden lg:flex items-center">
        <div className="mr-12 text-3xl italic">
          <GradientText text={"Brainy"} />
        </div>
        <div className="flex mr-auto space-x-7 font-bold text-black text-sm ">
          {navLinks.map((navLink) => {
            const { id, text, link } = navLink;
            return <NavLink key={id} text={text} link={link} />;
          })}
        </div>
        <div className="flex space-x-7 text-sm font-bold">
          <a
            href="mailto:myohtetsandrinksmilk@gmail.com"
            className="text-blue-400 hover:text-black transition-all duration-200"
          >
            myohtetsandrinksmilk@gmail.com
          </a>

          <a
            href="tel:+66994765425"
            className=" text-orange-400 hover:text-black transition-all duration-200"
          >
            +66994765425
          </a>
        </div>
        <div className="mx-9">|</div>
        <div className="flex space-x-7  text-xl text-black">
          {socialIcons.map((socialIcon) => {
            const { id, link, Component } = socialIcon;
            return (
              <a
                href={link}
                className="hover:text-blue-400 transition-all duration-200"
                key={id}
              >
                <Component />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
