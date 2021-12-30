import Tasks from "./Tasks";
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");

  const [tasks, setTasks] = useState([]);

  const [show, setShow] = useState(false);

  function handleDelete(desc) {
    const newTasks = tasks.filter((task) => task.desc !== desc);
    setTasks((tasks) => newTasks);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const task = { title: title, time: time, desc: desc };
    setTasks((tasks) => {
      return [...tasks, task];
    });
    setTitle("");
    setTime("");
    setDesc("");
  }

  if (show) {
    return (
      <div className="card">
        <input
          type="button"
          onClick={() => setShow((value) => !value)}
          value="Close"
        />
        <form onSubmit={handleSubmit}>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          Date and Time:
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          Description:
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
          <input type="submit" value="submit" />
        </form>
        <br />
        {tasks.length === 0 ? "no TODOS" : "List of TODOS:"}

        <Tasks tasks={tasks} handleDelete={handleDelete} />
      </div>
    );
  } else {
    return (
      <div className="card">
        <input
          type="button"
          onClick={() => setShow((value) => !value)}
          value="Add ToDo"
        />
        <br />
        <br />

        {tasks.length === 0 ? "no TODOS" : "List of TODOS:"}
        <Tasks tasks={tasks} handleDelete={handleDelete} />
      </div>
    );
  }
}

export default App;
