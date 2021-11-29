import { useContext, useState } from "react/cjs/react.development";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from "../../utils/api";
import loading from "../../assets/loading.gif";

const DeleteButton = ({ author, comment_id, setReviewsUpdated }) => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deleteComment(comment_id).then(() => {
      setIsLoading(false);
      setReviewsUpdated((currentVal) => {
        return currentVal + 1;
      });
    });
  };

  if (isLoading)
    return (
      <img
        className="loading_gif"
        id="delete_loading"
        src={loading}
        alt="loading..."
      />
    );
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
