import { useState } from "react";
import { useParams } from "react-router";
import useComments from "../../hooks/useComments";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

const CommentsList = () => {
  const { review_id } = useParams();
  const [reviewsUpdated, setReviewsUpdated] = useState(0);
  const { comments, error, isLoading } = useComments(review_id, reviewsUpdated);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="error_handling">{error}</p>;

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
