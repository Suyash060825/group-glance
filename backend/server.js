let tasks = [
  { id: 1, projectId: 1, title: "Set up repo", assignee: "Alice", dueDate: "2025-09-10", status: "To-Do" },
];


import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let projects = [
  { id: 1, name: "Hackathon Project", status: "In Progress" },
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.post("/api/projects", (req, res) => {
  const newProject = { id: Date.now(), ...req.body };
  projects.push(newProject);
  res.status(201).json(newProject);
});
// Get tasks by project
app.get("/api/projects/:projectId/tasks", (req, res) => {
  const { projectId } = req.params;
  const projectTasks = tasks.filter(task => task.projectId === parseInt(projectId));
  res.json(projectTasks);
});


app.post("/api/projects/:projectId/tasks", (req, res) => {
  const { projectId } = req.params;
  const newTask = { id: Date.now(), projectId: parseInt(projectId), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});


app.listen(4000, () => console.log("Backend running on http://localhost:4000"));



