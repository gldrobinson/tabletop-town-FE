import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from "../../utils/api";

const DeleteButton = ({ author, comment_id, setReviewsUpdated }) => {
  const { user } = useContext(UserContext);
  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      setReviewsUpdated((currentVal) => {
        return currentVal + 1;
      });
    });
  };

  return (
    <main>
      {author === user.username ? (
        <span
          onClick={handleDelete}
          className="delete_button"
          role="img"
          aria-label="delete"
        >
          ✘
        </span>
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default DeleteButton;
