import axios from "axios";

export const instance = axios.create({
  baseURL: "https://my-portfolio-a88p.onrender.com/api/v1",
});
