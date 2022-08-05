import React from "react";
import styles from "./listtask.module.css";
import { RiPaintFill } from "react-icons/ri";

function Index({
  todayCategory,
  todayTrack,
  todayNumber,
  Icon,
  color,
  numColor,
  numBg,
  numBorder,
}) {
  return (
    <div className="">
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <div
            className={`${styles.paint} flex items-center justify-center`}
            style={{ background: color }}
          >
            {Icon}
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-bold">{todayCategory}</h3>
            <p className="text-xs text-gray-500">{todayTrack}</p>
          </div>
        </div>
        <div
          className={`${styles.todayNum} flex items-center justify-center text-sm font-bold`}
          style={{ color: numColor, background: numBg, border: numBorder }}
        >
          {todayNumber}
        </div>
      </div>
    </div>
  );
}

export default Index;
