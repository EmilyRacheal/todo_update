import React from "react";
import CategoryCard from "../categoryCard/index";
import { categoryData } from "../../UtilsData/index";

function Index() {
  return (
    <div>
      <div className="pt-10 text-white">
        <h1 className=" text-3xl text-white">Category</h1>

        <div className="flex gap-x-10 py-5">
          {categoryData.map((item) => {
            return (
              <CategoryCard
                cardIcon={item.cardIcon}
                cardTitle={item.cardTitle}
                cardTask={item.cardTask}
                cardBg={item.cardBg}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
