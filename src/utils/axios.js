import axios from "axios";

export const instance = await axios.create({
  baseURL: "https://my-portfolio-a88p.onrender.com/api/v1",
});
