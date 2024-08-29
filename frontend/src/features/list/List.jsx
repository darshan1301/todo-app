import ListItem from "./ListItem";

const folders = [
  { name: "personal", id: 1 },
  { name: "fitness", id: 2 },
  { name: "fitness", id: 5 },
  { name: "diet", id: 3 },
  { name: "diet", id: 4 },
];

const List = () => {
  return (
    <div className="my-4 grid gap-4 grid-cols-4">
      {folders.map((item) => (
        <ListItem key={item.id} list={item} />
      ))}
    </div>
  );
};

export default List;
