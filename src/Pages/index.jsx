import React from "react";
import styles from "./Hero.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { MdColorLens } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

function Index() {
  return (
    <div>
      <div className={`${styles.hero} px-10 py-10`}>
        <div className={`${styles.heroBg} w-full py-5`}>
          <h4 className="text-lg text-white">Hello</h4>
          <h1 className="text-2xl text-white font-bold">Guidotti Emily</h1>
        </div>
        <form action="">
          <div className={`${styles.textInput} flex items-center py-2 px-3`}>
            <HiOutlineSearch color="white" />
            <input
              type="text"
              placeholder="Search"
              className="ml-3 text-white"
            />
          </div>
        </form>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
