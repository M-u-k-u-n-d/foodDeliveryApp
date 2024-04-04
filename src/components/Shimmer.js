const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
        <button
          type="submit"
          className="top-rated"
        >
          Top Rated
        </button>
      </div>
      <div className="shimmer-card-container res-container">
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
        <div className="shimmer-card res-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
