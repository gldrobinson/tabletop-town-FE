const CommentCard = ({ comment }) => {
  console.log(comment);
  const { author, comment_body, comment_created_at, comment_id, votes } =
    comment;

  return (
    <section>
      <p>{comment_body}</p>
      <p>{author}</p>
      <p>{votes}</p>
      <p>{comment_created_at}</p>
    </section>
  );
};

export default CommentCard;
