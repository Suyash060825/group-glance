import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasks, createTask, updateTask } from "../services/taskService";

export default function ProjectDetail() {
  const { id } = useParams(); // projectId
  const projectId = id!;
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    getTasks(projectId).then(setTasks);
  }, [projectId]);

  const handleAddTask = () => {
    if(!newTaskTitle) return;
    createTask(projectId, { title: newTaskTitle, assignee: "Alice", dueDate: "2025-09-10", status: "To-Do" })
      .then(task => setTasks(prev => [...prev, task]));
    setNewTaskTitle("");
  };

  const handleStatusChange = (taskId: string, newStatus: string) => {
    updateTask(taskId, { status: newStatus })
      .then(updated => setTasks(prev => prev.map(t => t._id === updated._id ? updated : t)));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Project {projectId} Tasks</h1>
      <ul className="my-4">
        {tasks.map(task => (
          <li key={task._id} className="border p-2 mb-2 flex justify-between items-center">
            <div>
              <strong>{task.title}</strong> - {task.assignee} - {task.dueDate}
            </div>
            <select value={task.status} onChange={e => handleStatusChange(task._id, e.target.value)} className="border p-1">
              <option>To-Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </li>
        ))}
      </ul>

      <input value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} placeholder="New Task Title" className="border p-2 mr-2"/>
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </div>
  );
}
