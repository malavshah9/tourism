import axios from "axios";
import { API_BASE } from "./constant";

const HTTP = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-type": "application/json",
  },
});

export { HTTP };
