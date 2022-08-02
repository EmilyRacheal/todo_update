import React from "react";
import styles from "./listtask.module.css";
import { RiPaintFill } from "react-icons/ri";

function Index() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex ">
          <RiPaintFill size={20} className={`${styles.paint}`}/>
          <div>
            <h3>Sketching</h3>
            <p>2 Completed</p>
          </div>
        </div>
        <div>4</div>
      </div>
    </div>
  );
}

export default Index;
