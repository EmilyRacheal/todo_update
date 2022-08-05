import React from "react";
import styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";

function Index() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="p-5  bg-red-200   w-1/2">
          <div className="flex justify-end w-full">
            <FaTimes />
          </div>
          <form action="" className="flex flex-col">
            <label htmlFor="" className="font-bold py-3">
              Add Task
            </label>
            <input type="text" className={`${styles.textInput} py-2 px-3`} />
            <label htmlFor="" className="font-bold py-3">
              Choose Task Category
            </label>
            <select name="" id="">
              <option value="">Learning</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
