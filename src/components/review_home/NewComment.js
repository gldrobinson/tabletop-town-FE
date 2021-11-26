import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { postComment } from "../../utils/api";

const NewComment = ({ setReviewsUpdated, error }) => {
  const { user } = useContext(UserContext);
  const { review_id } = useParams();
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewComment(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postComment(review_id, newComment, user.username).then((commentPosted) => {
      setReviewsUpdated((currentVal) => {
        return currentVal + 1;
      });
      setNewComment("");
    });
  };
  if (error) return <div></div>;

  return (
    <section className="NewComment">
      <div className="profile_section new_comment">
        <img
          className="profile_img"
          src="https://pngimg.com/uploads/circle/circle_PNG12.png"
          alt="profile img"
        />
        <p className="profile_author">{user.username}</p>
        <p className="time">Now</p>
      </div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="new_comment"></label>
        <input
          className="new_comment_body"
          placeholder="Post a public comment"
          type="text"
          name="submit"
          value={newComment}
          onChange={handleInputChange}
          required
        ></input>
        <button className="comment_button" type="submit">
          Post
        </button>
      </form>
    </section>
  );
};

export default NewComment;
