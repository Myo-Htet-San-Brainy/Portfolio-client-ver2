import React from "react";
import { About, Projects, Blogs, Advice, Footer } from "./Pages";
import { SeperationLine } from "./Components";
import { useDataFetchingStates } from "./Context";

const App = () => {
  const { isError, isLoading } = useDataFetchingStates();
  if (isLoading) {
    return (
      <div className="h-screen bg-white grid place-content-center text-3xl uppercase font-bold text-blue-400">
        loading
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-screen bg-white grid place-content-center text-3xl uppercase font-bold text-red-400">
        error
      </div>
    );
  }
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
