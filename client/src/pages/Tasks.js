import { useState } from "react";

function Tasks() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Complete project design",
    "Create frontend pages",
    "Connect backend API"
  ]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h1>Team Tasks</h1>

      <input
        type="text"
        placeholder="Enter task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <h2>Task List</h2>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Tasks;