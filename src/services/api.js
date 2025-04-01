import axios from "axios";

// Create an axios instance
export const api = axios.create({
  baseURL: "", 
  headers: {
    "Content-Type": "application/json",
  },
});

