import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api/projects";


export const getProjects = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createProject = async (project: { name: string; status: string }) => {
  const res = await axios.post(API_URL, project);
  return res.data;
};
