import React from "react";
import styles from "./modal.module.css";
import { AiOutlinePlus } from "react-icons/ai";

function Index() {
  return (
    <div>
      <div className="flex items-center justify-center"></div>
      <div className="p-5 w-1/2 flex">
        <div className="flex justify-end">
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
}

export default Index;
