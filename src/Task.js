function Task({ task, handleDelete }) {
  return (
    <ul>
      <li>
        <div id="task">
          <p>
            {task.title},{task.time},{task.desc}
          </p>
          <input
            type="button"
            onClick={() => handleDelete(task.desc)}
            value="X"
          />
        </div>
      </li>
    </ul>
  );
}

export default Task;
