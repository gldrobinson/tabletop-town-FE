import moment from "moment";

const CommentCard = ({ comment }) => {
  const { author, comment_body, comment_created_at, comment_id, votes } =
    comment;
  //const date = comment_created_at.split("T")[0];

  const date = new Date(comment_created_at);
  const timeAgo = moment(date).fromNow();
  console.log(timeAgo);
  return (
    <section className="CommentCard">
      <div className="profile_section">
        <img
          className="profile_img"
          src="https://pngimg.com/uploads/circle/circle_PNG12.png"
          alt="profile img"
        />
        <p className="profile_author">{author}</p>
        <p className="comment_time">{timeAgo}</p>
      </div>
      <p className="comment_body">{comment_body}</p>
      <div className="comment_votes">
        <span className="votes">⬆️</span>
        <p className="votes">{votes}</p>
        <span className="votes">⬇️</span>
      </div>
    </section>
  );
};

export default CommentCard;
