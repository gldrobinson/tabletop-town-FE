import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments } from "../../utils/api";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

const CommentsList = () => {
  const { review_id } = useParams();
  const [reviewsUpdated, setReviewsUpdated] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id)
      .then((commentsReceived) => {
        setComments(commentsReceived);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reviewsUpdated]);

  console.log(reviewsUpdated);

  return (
    <main className="CommentList">
      <section className="comments_list">
        {comments.map((comment) => {
          return (
            <CommentCard
              setReviewsUpdated={setReviewsUpdated}
              key={comment.comment_id}
              comment={comment}
            />
          );
        })}
      </section>
      <NewComment setReviewsUpdated={setReviewsUpdated} />
    </main>
  );
};

export default CommentsList;
