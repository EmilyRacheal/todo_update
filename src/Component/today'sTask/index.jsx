import React from "react";
import styles from "./today'sTask.module.css";
import ListTask from "../ListTask/index";
import { todayData } from "../dummydata/index";

function Index() {
  return (
    <div className="">
      <div className={`${styles.todayBg} px-10 py-10`}>
        <h1 className="pb-5 text-lg font-bold">Today's Task</h1>

        {todayData.map((item) => {
          return (
            <ListTask
              todayCategory={item.todayCategory}
              todayTrack={item.todayTrack}
              todayNumber={item.todayNumber}
              Icon={item.Icon}
              color={item.color}
              numColor={item.numColor}
              numBg={item.numBg}
              numBorder={item.numBorder}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Index;
