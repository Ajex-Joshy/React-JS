import Card from "./cards";

const Categories = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="text-2xl text-white font-bold">{title}</div>
      <div>
        <Card path={movies[0].poster_path} />
      </div>
    </div>
  );
};

export default Categories;
