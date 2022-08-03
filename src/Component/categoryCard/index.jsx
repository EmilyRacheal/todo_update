import React from "react";
import styles from "./categoryCard.module.css";
import { MdColorLens } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { GiBookmarklet } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineBorderColor } from "react-icons/md";

function Index({ cardIcon, cardTitle, cardTask, cardBg }) {
  return (
    <div>
      <div className={`${styles.category} pt-10 text-white`}>
        <h1 className=" text-3xl text-white">Category</h1>
        <div className="flex gap-x-10 py-5">
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

          {/* ====second category card ==== */}

          <div className={`${styles.categoryBlue} py-5 px-5 w-40`}>
            <MdOutlineBorderColor size={40} color="white" />
            <h2 className="font-semibold text-lg">Prototyping</h2>
            <div className="flex items-center mb-2">
              <div className={`${styles.dotTask} `}></div>
              <p className="ml-2 text-sm">2 task</p>
            </div>

            <AiOutlinePlus size={20} />
          </div>

          {/* =====end of second category card ===== */}

          {/* ====Third category card ==== */}

          <div className={`${styles.categoryYellow} py-5 px-5 w-40`}>
            <IoIosPeople size={40} color="white" />
            <h2 className="font-semibold text-lg">Meeting</h2>
            <div className="flex items-center mb-2">
              <div className={`${styles.dotTask} `}></div>
              <p className="ml-2 text-sm">1 task</p>
            </div>

            <AiOutlinePlus size={20} />
          </div>

          {/* =====end of third category card ===== */}

          {/* ====fourth category card ==== */}

          <div className={`${styles.categorycyan} py-5 px-5 w-40`}>
            <GiBookmarklet size={40} color="white" />
            <h2 className="font-semibold text-lg">Learning</h2>
            <div className="flex items-center mb-2">
              <div className={`${styles.dotTask} `}></div>
              <p className="ml-2 text-sm">3 task</p>
            </div>

            <AiOutlinePlus size={20} />
          </div>

          {/* =====end of fourth category card ===== */}
        </div>
      </div>
    </div>
  );
}

export default Index;
