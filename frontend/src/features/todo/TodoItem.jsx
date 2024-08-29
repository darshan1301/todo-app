import { HiPencilSquare } from "react-icons/hi2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTrash } from "react-icons/fa";
/* eslint-disable react/prop-types */
const TodoItem = ({ todo }) => {
  function handleChangeDate(date) {}
  return (
    <div className="border-b-4 border h-auto  border-ctm-purple rounded-md my-2 px-2 py-2">
      <div className="flex justify-between items-center ">
        <div>
          <input checked={false} type="checkbox" className="mx-2" />
        </div>
        <div className=" w-[30rem]">
          <h2 className="text-lg text-ctm-purple">{todo.heading}</h2>
          <p className="text-sm">{todo.description}</p>
        </div>
        <div className=" flex space-x-2">
          <button className="text-2xl text-ctm-purple">
            <HiPencilSquare />
          </button>
          <button>
            <FaTrash className="text-ctm-purple" />
          </button>
        </div>
      </div>
      <div className="flex my-2 mx-10 uppercase justify-between text-sm text-ctm-purple">
        <p>Due Date:</p>
        <DatePicker
          className=" text-sm rounded-sm px-2 py-1 bg-ctm-purple text-white"
          selected={todo.dueDate}
          onChange={(date) => handleChangeDate(date)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
