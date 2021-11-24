import moment from "moment";

const CommentCard = ({ comment }) => {
  const { author, comment_body, comment_created_at, comment_id, votes } =
    comment;
  //const date = comment_created_at.split("T")[0];

  const date = new Date(comment_created_at);
  const timeAgo = moment(date).fromNow();

  return (
    <section className="CommentCard">
      <div className="profile_section">
        <img
          className="profile_img"
          src="https://pngimg.com/uploads/circle/circle_PNG12.png"
          alt="profile img"
        />
        <p className="profile_author">{author}</p>
        <p className="time">{timeAgo}</p>
      </div>
      <p className="comment_body">{comment_body}</p>
      <div className="votes_section">
        <span className="votes" role="img" aria-label="vote_up">
          ⬆️
        </span>
        <p className="votes">{votes}</p>
        <span className="votes" ole="img" aria-label="vote_down">
          ⬇️
        </span>
      </div>
    </section>
  );
};

export default CommentCard;
