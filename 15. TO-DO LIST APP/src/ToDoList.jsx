import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "take a shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="font-sans text-center mt-32 mx-16">
      <h1 className="text-6xl font-bold mb-20 text-white">To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          name=""
          id=""
          className="text-2xl p-2.5 border-2 border-solid border-slate-500 rounded text-slate-400 mb-10"
        />
        <button
          className="text-3xl font-bold px-5 py-2.5 text-white border-none rounded-md cursor-pointer transition-colors duration-500 ease-linear bg-green-600 hover:bg-green-700"
          onClick={() => addTask()}
        >
          Add
        </button>
      </div>

      <ol className="">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="text-3xl font-bold p-3.5 bg-slate-100 mb-2.5 border-2 border-solid border-slate-200 rounded flex items-center"
          >
            <span className="flex-1">{task}</span>{" "}
            <button
              className="text-3xl font-bold px-5 py-2.5 text-white border-none rounded-md cursor-pointer transition-colors duration-500 ease-linear bg-red-600 hover:bg-red-700"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="text-3xl font-bold px-5 py-2.5 text-white border-none rounded-md cursor-pointer transition-colors duration-500 ease-linear bg-blue-600 hover:bg-blue-700 ml-4"
              onClick={() => moveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="text-3xl font-bold px-5 py-2.5 text-white border-none rounded-md cursor-pointer transition-colors duration-500 ease-linear bg-blue-600 hover:bg-blue-700 ml-4"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
