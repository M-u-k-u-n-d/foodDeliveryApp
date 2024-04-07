import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {cloudinaryImageId,name,cuisines,locality,avgRating} = props?.valu?.info;
    const {slaString} = props?.valu?.info?.sla;
    let { header, subHeader } = props?.valu?.info?.aggregatedDiscountInfoV3 ?? { header: undefined, subHeader: undefined };
    if (header == undefined)  header = "󠁝";
    if (subHeader == undefined)  subHeader = "";
    return (
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
        <img className="w-60 h-40 object-cover pt-2 pb-4 box-border rounded-[22px] relative z-0" src={CDN_URL + cloudinaryImageId} alt="card-img"></img>
          <h2 className="flex justify-center items-center h-20 rounded-lg w-full font-extrabold  pb-4 relative bottom-12 text-xl z-10 text-white bg-gradient-to-b from-transparent to-black">{`${header}  ${subHeader}`}</h2>
        <div className="w-60 relative -top-8">
          <h2 className="whitespace-nowrap overflow-hidden text-ellipsis w-56 font-bold pb-4">{name}</h2>
          <h3 className="whitespace-nowrap overflow-hidden text-ellipsis w-56 font-serif"><span>{avgRating} ⭐</span> <span>Reached in {slaString}</span></h3>
          <h6 className="whitespace-nowrap overflow-hidden text-ellipsis w-56 font-light">{cuisines?.join(", ")}</h6>
          <h6 className="whitespace-nowrap overflow-hidden text-ellipsis w-56 font-sans">{locality}</h6>
        </div>
      </div>
    );
  };


  //  Higher Order Component => takes component as a input and return component as a output
  export const topRatedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
          <div className="mb-10">
          <label className="flex justify-center items-center h-7 w-28 bg-gray-900 text-white absolute mt-1 z-30 rounded-md font-mono" >
            Top Rated
            </label>
          <RestaurantCard {...props}/>
          </div>
        )

    }
  }

  export default RestaurantCard;
  // className="whitespace-nowrap overflow-hidden text-ellipsis"