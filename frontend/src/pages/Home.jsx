import List from "../features/list/List";

const Home = () => {
  return (
    <div className="  ">
      <div className="text-xl font-serif uppercase">
        <h1>Your Todo Lists:</h1>
      </div>
      <List />
    </div>
  );
};

export default Home;
