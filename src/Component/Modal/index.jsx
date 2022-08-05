import React from "react";
import styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";

function Index() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="p-5 flex bg-red-200   w-1/2">
          <div className="flex justify-end w-full">
            <FaTimes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
