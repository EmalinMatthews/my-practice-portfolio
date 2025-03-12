import React, { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const taskRef = React.useRef(null);

  return (
    <section className="bg-secondary text-black py-28" id="about">
      <h1 className="text-center text-7xl">Have A Great Day!</h1>
      <iframe
        className="app2"
        width="460"
        height="220"
        src="https://www.youtube.com/embed/HQwLPhE2zys"
        title="90&#39;s Lofi City 🔥Retro Tokyo Lofi 🌃 Lo fi Beats To Sleep,
            Relax  [lofi hiphop mix]"
        frameborder="0"
        allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="app">
        <header className="header">
          <h1 className="mt-2 text-2xl">To-Do List</h1>
          <p className="mt-2">Click On The Task To Mark It As Done!</p>
        </header>

        <div className={`input-container`} ref={taskRef}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
            placeholder="Enter a new task"
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.completed ? "task completed" : "task"}
            >
              <span onClick={() => toggleTask(index)}>{task.text}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ToDo;
