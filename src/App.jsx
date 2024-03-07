import React from "react";
import { About, Projects, Blogs, Advice } from "./Pages";
import { SeperationLine } from "./Components";

const App = () => {
  return (
    <div className="bg-white">
      <About />
      <SeperationLine />
      <Projects />
      <SeperationLine />
      <Blogs />
      <SeperationLine />
      <Advice />
    </div>
  );
};

export default App;
