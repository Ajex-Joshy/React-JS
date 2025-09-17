const Shimmer = () => {
  return (
    <>
      <div className="flex my-10 mt-44">
        <button className="mx-10 py-1 px-3 bg-green-400 rounded-sm">
          Top Restaurants
        </button>
        <div className="search-container">
          <input
            type="text"
            className="border-2 border-solid border-black rounded-sm"
            placeholder="  search restaurant.."
          />
          <button className="mx-3 rounded-sm bg-green-400 px-3 py-1">
            Search
          </button>
        </div>
      </div>
      <div className="w-10/12 mx-auto flex flex-wrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-60 h-90 bg-gray-200 m-3 rounded-xl hover:bg-gray-300"
          ></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
