import { useEffect, useState } from "react";
import { getProjects, createProject } from "../services/projectService";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const handleAddProject = () => {
    if(!newProjectName) return;
    createProject({ name: newProjectName })
      .then(project => setProjects(prev => [...prev, project]));
    setNewProjectName("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Projects</h1>
      <ul className="my-4">
        {projects.map(p => <li key={p._id}>{p.name}</li>)}
      </ul>
      <input value={newProjectName} onChange={e => setNewProjectName(e.target.value)} placeholder="New Project Name" className="border p-2 mr-2"/>
      <button onClick={handleAddProject} className="bg-blue-500 text-white p-2 rounded">Add Project</button>
    </div>
  );
}
