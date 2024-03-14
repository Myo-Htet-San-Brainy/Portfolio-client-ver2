import axios from "axios";

export const instance = axios.create({
  baseURL: "https://arcane-storm-417115.as.r.appspot.com/api/v1",
});
