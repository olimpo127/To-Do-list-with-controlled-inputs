import React, { useState } from "react";

function ToDoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", margin: "100px", marginLeft: "150px", marginRight: "150px"}}>
      <h1>To Do App</h1>
      <div style={{ textAlign: "center", marginLeft: "200px", marginRight: "200px", borderStyle: "solid" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={handleChange}
          style={{display: "flex", justifyContent: "space-between", padding: "10px", width: "575px", border: "none", borderBottom: "solid"}}
        />
      </form>
      <div>
        {tasks.length > 0 ? (
          tasks.map((t, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid black", padding: "10px" }}>
              <p>{t}</p>
              <button onClick={() => handleDelete(index)}>X</button>
            </div>
          ))
        ) : (
          <p style={{border: "solid"}}><strong>No tasks, add a task</strong></p>
        )}
      </div>
      <p style={{display: "flex", justifyContent:"flex-start", fontSize:" 10px", marginLeft:"3px"}}>{tasks.length} item{tasks.length === 1 ? "" : "s"} left</p>
    </div>
    </div>
  );
}

export default ToDoApp;
