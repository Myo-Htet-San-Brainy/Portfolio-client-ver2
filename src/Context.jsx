import React, { createContext, useContext, useEffect, useState } from "react";
import { instance } from "./utils/axios";
const DataFetchingStatesContext = createContext(null);
const ProjectsContext = createContext(null);
const LinksContext = createContext(null);
import { toast } from "react-toastify";

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState({});
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
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
      toast.error("Error when fetching links. Please come back later.");
    }
  }
  useEffect(() => {
    getProjects();
    getLinks();
  }, []);
  return (
    <DataFetchingStatesContext.Provider value={{ isLoading, isError }}>
      <ProjectsContext.Provider value={projects}>
        <LinksContext.Provider value={links}>{children}</LinksContext.Provider>
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

export default Context;
