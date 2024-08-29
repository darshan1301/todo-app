import { useNavigate, useParams } from "react-router-dom";
import Todo from "../features/todo/Todo";

const Folder = () => {
  const navigate = useNavigate();
  const { folderId } = useParams();
  console.log(folderId);
  function handleGoBack() {
    navigate(-1);
  }
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl text-ctm-purple uppercase">{folderId}</h2>
        <button className="" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
      <Todo />
    </div>
  );
};

export default Folder;
