import React, { createContext, useContext, useState } from "react";
const DataFetchingStatesContext = createContext(null);
const ProjectsContext = createContext(null);
const LinksContext = createContext(null);

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState({});
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
