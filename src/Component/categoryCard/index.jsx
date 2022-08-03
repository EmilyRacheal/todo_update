import React from "react";
import styles from "./categoryCard.module.css";
import { MdColorLens } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

function Index({ cardIcon, cardTitle, cardTask, cardBg }) {
  return (
    <div>
      <div className={`${styles.category} pt-10 text-white`}>
        <div
          className={`${styles.categoryBg} py-5 px-5 w-40`}
          style={{ background: cardBg }}
        >
          {cardIcon}
          <h2 className="font-semibold text-lg">{cardTitle}</h2>
          <div className="flex items-center mb-2">
            <div className={`${styles.dotTask} `}></div>
            <p className="ml-2 text-sm">{cardTask}</p>
          </div>

          <AiOutlinePlus size={20} />
        </div>
      </div>
    </div>
  );
}

export default Index;
