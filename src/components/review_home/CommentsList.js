import { useState } from "react";
import { useParams } from "react-router";
import useComments from "../../hooks/useComments";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

const CommentsList = () => {
  const { review_id } = useParams();
  const [reviewsUpdated, setReviewsUpdated] = useState(0);
  const { comments, error } = useComments(
    review_id,
    reviewsUpdated,
    setReviewsUpdated
  );

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
      {reviewsUpdated > 0 ? (
        <NewComment error={error} setReviewsUpdated={setReviewsUpdated} />
      ) : (
        <></>
      )}
    </main>
  );
};

export default CommentsList;
