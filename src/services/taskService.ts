import axios from "axios";

const API_URL = "http://localhost:4000/api/projects";

export const getTasks = async (projectId: number) => {
  const res = await axios.get(`${API_URL}/${projectId}/tasks`);
  return res.data;
};

export const createTask = async (projectId: number, task: { title: string; assignee: string; dueDate: string; status: string }) => {
  const res = await axios.post(`${API_URL}/${projectId}/tasks`, task);
  return res.data;
};
