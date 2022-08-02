import React from "react";
import styles from "./today'sTask.module.css";
import ListTask from "../ListTask/index";

function Index() {
  return (
    <div className="">
      <div className={`${styles.todayBg} px-10 py-10`}>
        <h1 className="font-bold text-lg">Today's Task</h1>
        <ListTask />
      </div>
    </div>
  );
}

export default Index;
