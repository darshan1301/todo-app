import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

/* eslint-disable react/prop-types */
const ListItem = ({ list }) => {
  const navigate = useNavigate();
  function handleOpenFolder() {
    navigate(`/folder/${list.id}`);
  }

  return (
    <div className=" max-w-full flex justify-between border  bg-faded-mint px-2 py-2 rounded-md border-b-4 border-ctm-purple">
      <p
        onClick={handleOpenFolder}
        className="text-sm hover:cursor-pointer font-medium truncate text-ctm-purple capitalize">
        {list.name}
      </p>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default ListItem;
