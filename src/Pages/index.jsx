import React from "react";
import styles from "./Hero.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import CategoryCard from "../Component/categoryCard/index";
import TodayTask from "../Component/today'sTask/index";

function Index() {
  return (
    <div className={`${styles.hero} `}>
      <div className="px-10 py-10">
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
        <CategoryCard />
      </div>
      <TodayTask />
    </div>
  );
}

export default Index;
