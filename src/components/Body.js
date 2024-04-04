import RestaurantCard , {topRatedLabel} from "./RestaurantCard";
import { useEffect, useState ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardLabel = topRatedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6643923&lng=77.4465323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    let data = await fetch(url);
    let json = await data.json();

    // this API may be changed after some time need to update it , after some time intervals.

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) return(
    <h1>You are offline.</h1>
  )
    
  const topRated = () => {
    let filteredList = listOfRestaurant?.filter((val) => {
      if (val.info.avgRating >= 4.3) return val;
    });
    setFilteredListOfRestaurant(filteredList);
  }

  const Search = () => {
    let filteredRestaurant = listOfRestaurant?.filter((res) => {
      if (
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
        return res;
    });
    setFilteredListOfRestaurant(filteredRestaurant);
  };

  return  listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-[80vw] m-auto">
      <div className="flex  items-center justify-center mt-10 gap-6 xsm:flex-col">
        <div className="flex  items-center justify-center mt-10 gap-6">

          <button className="h-8 rounded-lg w-28  bg-green-200 hover:bg-green-400 hover:text-white font-serif"
          type="submit"
          onClick={topRated}
        >
          Top Rated
        </button>
        <button className="h-8 rounded-lg w-28  bg-blue-200 hover:bg-blue-400 hover:text-white font-serif"
          type="submit"
          onClick={Search}
        >
          Search
        </button>
        </div >
          <div className="flex  items-center justify-center mt-4">
        <input className="border-2 border-black h-8 rounded-lg  text-start pl-4 w-[255px]"
          type="text"
          placeholder="Search. . ."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center mt-9">
        {filteredListOfRestaurant?.map((val) => (
          <Link  key={val.info.id} to={"/restaurants/" + val.info.id} >
          {(val.info.avgRating >= 4.3) ? (
            <RestaurantCardLabel valu={val}/>
          ) :
          (
          <RestaurantCard valu={val} />
          )} </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
