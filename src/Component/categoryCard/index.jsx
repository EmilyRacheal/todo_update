import React from "react";
import styles from "./categoryCard.module.css";
import { MdColorLens } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

function Index() {
  return (
    <div>
      <div className={`${styles.category} pt-10 text-white`}>
        <h1 className=" text-3xl text-white">Category</h1>
        <div className="grid grid-cols-4 gap-4 py-5">
          <div className={`${styles.categoryBg} py-5 px-5 w-40`}>
            <MdColorLens size={40} color="white" />
            <h2 className="font-semibold text-lg">Design</h2>
            <div className="flex items-center mb-2">
              <div className={`${styles.dotTask} `}></div>
              <p className="ml-2 text-sm">5 task</p>
            </div>

            <AiOutlinePlus size={20} />
          </div>

          {/* ====second category card ==== */}

          <div className={`${styles.categoryBlue} py-5 px-5 w-40`}>
            <MdColorLens size={40} color="white" />
            <h2 className="font-semibold text-lg">Design</h2>
            <div className="flex items-center mb-2">
              <div className={`${styles.dotTask} `}></div>
              <p className="ml-2 text-sm">5 task</p>
            </div>

            <AiOutlinePlus size={20} />
          </div>

          {/* =====end of second category card ===== */}

          {/* ====Third category card ==== */}

          <div className={`${styles.categoryYellow} py-5 px-5 w-40`}>
            <MdColorLens size={40} color="white" />
            <h2 className="font-semibold text-lg">Design</h2>
            <div className="flex items-center mb-2">
              <div className={`${styles.dotTask} `}></div>
              <p className="ml-2 text-sm">5 task</p>
            </div>

            <AiOutlinePlus size={20} />
          </div>

          {/* =====end of third category card ===== */}
        </div>
      </div>
    </div>
  );
}

export default Index;
