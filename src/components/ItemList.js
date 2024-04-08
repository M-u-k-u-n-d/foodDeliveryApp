import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ItemList = ({ items, flag }) => {
  const dispatch = useDispatch();
  handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  removeAnItem = (item) => {
    // Dispatch an action
    dispatch(removeItem(item));
  };

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
              <div className="flex flex-col  items-center ml-6">
                {item?.card?.info?.imageId ? (
                  <img
                    className="h-28 w-36 object-cover  rounded-md"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                ) : (
                  <div className="h-2 w-28 ml-9 rounded-md bg-gray-50"></div>
                )}
                {flag === false && (
                  <button
                    className="font-bold text-gray-900  bg-[#ff8522] hover:bg-[#ff4a22] hover:text-white rounded-md h-10 w-20 shadow-md flex justify-center items-center relative -top-5"
                    onClick={() => {
                      handleAddItem(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}
                {flag && (
                  <div className="flex">
                    <button
                      className="font-bold text-gray-900  bg-[#ff8522] hover:bg-[#ff4a22] hover:text-white rounded-md h-10 w-16 shadow-md flex justify-center items-center relative -top-5"
                      onClick={() => {
                        removeAnItem(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                )}
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
