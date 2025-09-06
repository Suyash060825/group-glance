import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasks, createTask } from "../services/taskService";

export default function ProjectDetail() {
  const { id } = useParams(); // project ID from route
  const projectId = parseInt(id!);
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    getTasks(projectId).then(setTasks);
  }, [projectId]);

  const handleAddTask = () => {
    if (!newTaskTitle) return;
    createTask(projectId, { title: newTaskTitle, assignee: "Alice", dueDate: "2025-09-10", status: "To-Do" })
      .then(task => setTasks(prev => [...prev, task]));
    setNewTaskTitle("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Project {projectId} Tasks</h1>

      <ul className="my-4">
        {tasks.map(task => (
          <li key={task.id} className="border p-2 mb-2">
            {task.title} - {task.assignee} - {task.status} - {task.dueDate}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="New Task Title"
        className="border p-2 mr-2"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </div>
  );
}
