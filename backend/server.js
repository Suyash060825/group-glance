import Project from './models/Project.js';
import Task from './models/Task.js';

let tasks = [
  { id: 1, projectId: 1, title: "Set up repo", assignee: "Alice", dueDate: "2025-09-10", status: "To-Do" },
];
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let projects = [
  { id: 1, name: "Hackathon Project", status: "In Progress" },
];

app.get("/api/projects", async (req,res) => { ... });


app.post("/api/projects", async (req,res) => { ... });


app.get("/api/projects/:projectId/tasks", async (req,res) => { ... });


app.post("/api/projects/:projectId/tasks", async (req,res) => { ... });


app.put("/api/tasks/:taskId", async (req,res) => { ... });



app.listen(4000, () => console.log("Backend running on http://localhost:4000"));



