import React from "react";
import styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function Index({ toggle }) {
  const [taskInput, setTaskInput] = useState("king");
  const [CategoryTask, setCategoryTask] = useState("you");
  const [addTask, setAddTask] = useState();

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };
  console.log(taskInput);

  const handleCategoryInput = (e) => {
    setTaskInput(e.target.value);
  };
  console.log(CategoryTask);

  const handleAddTask = () => {
    setAddTask({ task: taskInput, category: CategoryTask });
  };
  console.log(addTask);

  return (
    <div className="flex items-center justify-center w-full">
      <div className={`${styles.box} px-5 pt-5 pb-10  bg-red-200  `}>
        <div className="flex justify-end w-full">
          <FaTimes onClick={toggle} />
        </div>
        <form action="" className="flex flex-col">
          <label htmlFor="" className="font-bold py-3">
            Input Task
          </label>
          <input
            type="text"
            onChange={handleTaskInput}
            className={`${styles.textInput} py-2 px-3`}
          />
          <label htmlFor="" className="font-bold py-3">
            Choose Task Category
          </label>
          <select
            name=""
            id=""
            onChange={handleCategoryInput}
            className={`${styles.textInput} py-2 px-3`}
          >
            <option value="Studying">Studying</option>
            <option value="Meditating">Meditating</option>
            <option value="Designing">Designing</option>
            <option value="Coding">Coding</option>
          </select>
        </form>
        <button
          onClick={handleAddTask}
          className={`${styles.btn} text-sm px-4 py-3 mt-7`}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default Index;
