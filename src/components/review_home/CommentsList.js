import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments } from "../../utils/api";
import CommentCard from "./CommentCard";

const CommentsList = () => {
  const { review_id } = useParams();
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
    <section className="CommentList">
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
};

export default CommentsList;
