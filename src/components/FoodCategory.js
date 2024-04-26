import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";


const FoodCategory = () => {

  const [foodItems, setFoodItems] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const moveRight = ()=>{

  }

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7030425&lng=77.430373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data?.json();
    console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setFoodItems(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    // console.log(foodItems)
  }
  // json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png
  return (foodItems.length == 0)? <div/>:(
      <div className="mt-2 p-5 ">
        <div className="flex justify-between items-center ">
        <h1 className=" sm:text-xl text-lg font-extrabold mb-2 ">What's on your mind?</h1>
       
        </div>
        <div className="flex gap-3 scrollbar-hide overflow-auto"> 
            {
              foodItems.map((val)=>{
                console.log(val.imageId);
               return <img className="cursor-pointer h-[125px] w-[125px] object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + val?.imageId} alt="food-img"/>
                // <img className="h-[125px] w-[125px] object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + val?.imageId} alt="food-img"/>
              })
            }
            
        </div>
        
        
      </div>
  );    
};  

export default FoodCategory;
