import React, { createContext, useContext, useEffect, useState } from "react";
import { instance } from "./utils/axios";
const DataFetchingStatesContext = createContext(null);
const ProjectsContext = createContext(null);
const LinksContext = createContext(null);
const BlogsContext = createContext(null);
const BlogContext = createContext(null);
const ProjectContext = createContext(null);
import { toast } from "react-toastify";

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const [project, setProject] = useState({});
  async function getProjects() {
    try {
      const res = await instance.get("/projects");
      setProjects(res.data.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
      toast.error("Error when fetching projects. Please come back later.");
    }
  }
  async function getLinks() {
    try {
      const res = await instance.get("/links/getSocialLinks");
      setLinks(res.data.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
      toast.error("Error when fetching links. Please come back later.");
    }
  }
  async function getBlogs() {
    try {
      const res = await instance.get("/blogs");
      setBlogs(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
      toast.error("Error when fetching blogs. Please come back later.");
    }
  }
  useEffect(() => {
    getProjects();
    getLinks();
    getBlogs();
  }, []);
  return (
    <DataFetchingStatesContext.Provider value={{ isLoading, isError }}>
      <ProjectsContext.Provider value={projects}>
        <LinksContext.Provider value={links}>
          <BlogsContext.Provider value={blogs}>
            <BlogContext.Provider value={{ blog, setBlog }}>
              <ProjectContext.Provider value={{ project, setProject }}>
                {children}
              </ProjectContext.Provider>
            </BlogContext.Provider>
          </BlogsContext.Provider>
        </LinksContext.Provider>
      </ProjectsContext.Provider>
    </DataFetchingStatesContext.Provider>
  );
};

export function useDataFetchingStates() {
  return useContext(DataFetchingStatesContext);
}
export function useProjects() {
  return useContext(ProjectsContext);
}
export function useLinks() {
  return useContext(LinksContext);
}
export function useBlogs() {
  return useContext(BlogsContext);
}
export function useBlog() {
  return useContext(BlogContext);
}
export function useProject() {
  return useContext(ProjectContext);
}

export default Context;
