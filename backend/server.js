// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Mock data for now
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

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
