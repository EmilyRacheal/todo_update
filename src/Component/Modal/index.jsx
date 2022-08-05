import React from "react";
import styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";

function Index() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className={`${styles.box} px-5 pt-5 pb-10  bg-red-200  `}>
        <div className="flex justify-end w-full">
          <FaTimes />
        </div>
        <form action="" className="flex flex-col">
          <label htmlFor="" className="font-bold py-3">
            Input Task
          </label>
          <input type="text" className={`${styles.textInput} py-2 px-3`} />
          <label htmlFor="" className="font-bold py-3">
            Choose Task Category
          </label>
          <select name="" id="" className={`${styles.textInput} py-2 px-3`}>
            <option value="">Learning</option>
            <option value="">Learning</option>
            <option value="">Learning</option>
            <option value="">Learning</option>
          </select>
        </form>
        <button className={`${styles.btn} text-sm px-4 py-3 mt-7`}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default Index;
