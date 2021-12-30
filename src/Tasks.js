import Task from "./Task";

function Tasks({ tasks, handleDelete }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Tasks;
