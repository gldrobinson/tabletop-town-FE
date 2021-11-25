import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { getComments } from "../../utils/api";
import CommentCard from "./CommentCard";

const CommentsList = () => {
  const { review_id } = useParams();
  const { user } = useContext(UserContext);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id)
      .then((commentsReceived) => {
        setComments(commentsReceived);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="CommentList">
      <section className="comments_list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
      <section className="add_comment">
        <form>
          <img
            className="profile_img"
            src="https://pngimg.com/uploads/circle/circle_PNG12.png"
            alt="profile img"
          />

          <label htmlFor="new_comment"></label>
          <input className="new_comment" type="text" name="submit"></input>
        </form>
      </section>
    </main>
  );
};

export default CommentsList;
