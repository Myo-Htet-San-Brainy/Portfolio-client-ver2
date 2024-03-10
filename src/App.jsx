import React from "react";
import { About, Projects, Blogs, Advice, Footer, BlogDetails } from "./Pages";
import { SeperationLine } from "./Components";
import { useBlog, useDataFetchingStates } from "./Context";

const App = () => {
  const { isError, isLoading } = useDataFetchingStates();
  const { blog } = useBlog();
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
  if (Object.keys(blog).length !== 0) {
    return <BlogDetails />;
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
