import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems, setShowIndex, closeAll}) => {
  const handleClick = () => {
    if(showItems == false){
    setShowIndex();
    }
  else {
    closeAll();
  }
  };

  return (
    <div className="bg-pink-800">
      <div className="w-full bg-gray-50 p-5 rounded-md shadow-md">
        <div className="flex flex-col items-center">
          <div
            className="flex justify-between w-full cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-semibold font-mono text-slate-800">
              {data.title} ({data.itemCards.length})
            </span>
            <span>{showItems ? "🔼" : "🔽"}</span>
          </div>
          {showItems && <ItemList items={data?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
 