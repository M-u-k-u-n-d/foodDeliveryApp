import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items,flag}) => {
  const dispatch = useDispatch()

  handleAddItem = (item)=>{
    // Dispatch an action 
    dispatch(addItem(item))
  }

  return (
    <div>
      {items?.map((item) => {
        return (
          <div key={item?.card?.info?.id}>
            <div className="p-6 flex justify-between ">
              <div className="w-9/12">
                <div>
                  <p className="font-serif md:text-lg  text-gray-900 font-semibold">
                    {item.card.info.name}
                  </p>
                  <p>
                    ₹
                    {(item.card.info.price || item.card.info.defaultPrice) /
                      100}
                  </p>
                </div>
                <p className="font-sans font-thin text-xs text-wrap">
                  {item.card.info.description}
                </p>
              </div>
              <div className="flex flex-col w-3/12">
                {item?.card?.info?.imageId ? (
                  <img
                    className="h-20 w-28 object-cover md:ml-9 xsm:ml-2 rounded-md"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                ) : (
                  <div className="h-2 w-28 ml-9 rounded-md bg-gray-50"></div>
                )}
                {(flag === false) &&
                (<button className="bg-black font-serif text-white rounded-md w-20 ml-12 shadow-md flex justify-center items-center" onClick={()=>{handleAddItem(item)}}>
                  {" "}
                  ADD +{" "}
                </button>)}
              </div>
            </div>
            <div className="h-[0.5] bg-slate-400"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
