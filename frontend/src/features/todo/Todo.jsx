import ModalWindow from "../../components/ModalWindow";
import TodoItem from "./TodoItem";
import DatePicker from "react-datepicker";

const todos = [
  {
    heading: "Buy groceries",
    description: "Buy milk, eggs, and bread from the store",
    status: "pending",
    dueDate: new Date(2024, 6, 1),
    createdAt: new Date(),
  },
  {
    heading: "Finish project report",
    description: "Complete the final report for the project",
    status: "pending",
    dueDate: new Date(2024, 6, 5),
    createdAt: new Date(),
  },
  {
    heading: "Workout session",
    description: "Attend the online workout session",
    status: "completed",
    dueDate: new Date(2024, 5, 25),
    createdAt: new Date(),
  },
  {
    heading: "Doctor's appointment",
    description: "Visit the doctor for the annual check-up",
    status: "pending",
    dueDate: new Date(2024, 6, 10),
    createdAt: new Date(),
  },
  {
    heading: "Read a book",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy'",
    status: "completed",
    dueDate: new Date(2024, 5, 20),
    createdAt: new Date(),
  },
];

const Todo = () => {
  return (
    <>
      <div className="flex items-end justify-end rounded-md text-ctm-purple py-2 max-w-xl mx-auto">
        <ModalWindow
          primaryButton={
            <button className="rounded-md bg-ctm-purple text-sm text-white px-4 py-2">
              Add Task
            </button>
          }
          modalContent={
            <div className="flex flex-col gap-4 justify-center border-b-4 border border-ctm-purple bg-ctm-mint rounded-xl px-10 py-10">
              <input
                minLength={1}
                maxLength={20}
                type="text"
                className="block w-96 py-1 px-4 rounded-sm text-sm"
                placeholder="Enter Your Task"
              />
              <textarea
                maxLength={150}
                type="text"
                className="block  w-96 overflow-hidden h-24 py-1 px-4 rounded-sm text-sm"
                placeholder="Enter Task Description"
              />
              <DatePicker className=" text-sm rounded-sm px-4 bg-white text-white" />
              <button className="rounded-md bg-ctm-purple text-sm text-white px-4 py-2">
                Add Task
              </button>
            </div>
          }
        />
      </div>
      <div>
        <ModalWindow />
      </div>
      <div className=" max-w-xl mx-auto">
        {todos.map((item) => (
          <TodoItem key={item.description} todo={item} />
        ))}
      </div>
    </>
  );
};

export default Todo;
