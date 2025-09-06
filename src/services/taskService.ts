import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api/projects";

export const getTasks = async (projectId: string) => {
  const res = await axios.get(`${BASE_URL}/${projectId}/tasks`);
  return res.data;
};

export const createTask = async (projectId: string, task: { title: string; assignee: string; dueDate: string; status: string }) => {
  const res = await axios.post(`${BASE_URL}/${projectId}/tasks`, task);
  return res.data;
};

export const updateTask = async (taskId: string, updates: Partial<{ title:string; assignee:string; dueDate:string; status:string }>) => {
  const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/tasks/${taskId}`, updates);
  return res.data;
};

