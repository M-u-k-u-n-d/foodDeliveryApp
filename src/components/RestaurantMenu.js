import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ResMenuShimmer from "../Shimmer/ResMenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ResMenuShimmer />;
  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  return (
    <div className="min-h-screen max-h-full mb-20 mt-36">
    <div className="lg:w-[50vw] md:w-[70vw] flex flex-col bg-cyan-50 m-auto mt-20 rounded-md p-4">
      <div className="flex bg-gray-50 justify-between mb-10 rounded-md shadow-md p-6">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg font-sarif pb-4">{name}</h1>
          <p className="font-serif text-xs pb-2">{cuisines.join(", ")}</p>
          <h2 className="font-serif text-xs"> {areaName}</h2>
        </div>
        <div>
          <h3 className="border border-slate-500 rounded-sm font-semibold h-9 w-20 flex justify-center items-center">
            {" "}
            ⭐ {avgRating}
          </h3>
          <h3 className="border border-slate-500 rounded-sm font-thin text-xs h-6 w-20 flex items-center justify-center ">
            {totalRatingsString}
          </h3>
        </div>
      </div>

      {/* Categories accordian */}
      <div className="flex gap-9 flex-col">
        {categories?.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index == showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              closeAll={()=>setShowIndex(null)}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default RestaurantMenu;
