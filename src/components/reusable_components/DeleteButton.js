import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from "../../utils/api";

const DeleteButton = ({
  author,
  comment_id,
  setReviewsUpdated,
  setIsLoading,
}) => {
  const { user } = useContext(UserContext);

  const handleDelete = () => {
    setIsLoading(true);
    deleteComment(comment_id).then(() => {
      setIsLoading(false);
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
