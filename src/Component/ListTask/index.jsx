import React from "react";
import styles from "./listtask.module.css";
import { RiPaintFill } from "react-icons/ri";

function Index() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <div className={`${styles.paint} flex items-center justify-center`}>
            <RiPaintFill size={20} color="white" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-bold">Sketching</h3>
            <p className="text-xs text-gray-500">2 Completed</p>
          </div>
        </div>
        <div>4</div>
      </div>
    </div>
  );
}

export default Index;
