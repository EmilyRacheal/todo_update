import React, { useState } from "react";
import styles from "./Hero.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import CategoryCard from "../Component/categoryCard/index";
import TodayTask from "../Component/today'sTask/index";
import { categoryData } from "../UtilsData/index";
import Category from "../Component/category/index";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../Component/Modal/index";

function Index() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${styles.hero} relative`}>
      <div className="px-10 py-10">
        <div className={`${styles.heroBg} w-full py-5`}>
          <h4 className="text-lg text-white">Hello</h4>
          <h1 className="text-2xl text-white font-bold">Emily Guidotti </h1>
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

        <Category />
      </div>
      <TodayTask />
      <div
        className={`${styles.addBtn} flex items-center justify-center absolute mb-5`}
        onClick={handleToggle}
      >
        <AiOutlinePlus size={20} color="white" />
      </div>
      {toggle === false ? null : (
        <div className={`${styles.modalBox}`}>
          <Modal toggle={handleToggle} />
        </div>
      )}
    </div>
  );
}

export default Index;
