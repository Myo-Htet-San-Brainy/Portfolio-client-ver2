import React from "react";
import { About, Projects, Blogs, Advice, Footer } from "./Pages";
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
      <SeperationLine />
      <Footer />
    </div>
  );
};

export default App;
