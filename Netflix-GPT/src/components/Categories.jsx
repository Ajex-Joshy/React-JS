import Card from "./cards";

const Categories = ({ title, movies }) => {
  return (
    <div>
      <div className="text-2xl text-white font-bold p-3 ml-3">{title}</div>
      <div className="flex w-screen overflow-x-scroll ml-3 scrollbar-hide">
        {movies.map((m) => {
          return <Card key={m.id} path={m.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
