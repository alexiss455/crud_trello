// src/App.js
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);




  const handleAddTask = () => {
    const task = { title: newTask };
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setNewTask("");
      });
  };




  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default App;
