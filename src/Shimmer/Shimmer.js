const Shimmer = () => {
  return (
    <div className="w-[80vw] m-auto mt-32">
      <div className="flex flex-col items-center justify-center mt-10 gap-6 md:flex-row">
        <input className="border-2 border-black h-8 rounded-lg  text-start pl-4 w-[255px]"
          type="text"
          placeholder="Search. . ."
        />
        <div className="flex gap-6">
        <button className="h-8 rounded-lg w-28  bg-[#ff8522] hover:bg-[#ff4a22] text-white font-serif"
          type="submit"
        >
          Search
        </button>
          <button className="h-8 rounded-lg w-28  bg-green-200 hover:bg-green-400 hover:text-white font-serif"
          type="submit"
        >
          Top Rated
        </button>
        </div>
        </div >
        <div className="flex  items-center justify-center mt-4">
        </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center mt-20 mb-20">
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      <div className="flex flex-col border items-center w-64 h-72 bg-sky-100 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"></div>
      </div>
    </div>
  );
};

export default Shimmer;
