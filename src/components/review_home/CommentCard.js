import moment from "moment";
import DeleteButton from "../reusable_components/DeleteButton";
import Votes from "../reusable_components/Votes";
import ProfileAvatar from "../reusable_components/ProfileAvatar";

const CommentCard = ({ comment, setReviewsUpdated }) => {
  const { author, comment_body, comment_created_at, comment_id, votes } =
    comment;

  const date = new Date(comment_created_at);
  const timeAgo = moment(date).fromNow();

  return (
    <section className="CommentCard">
      <div className="profile_section">
        <ProfileAvatar username={author} />
        <p className="profile_author">{author}</p>
        <p className="time">{timeAgo}</p>
      </div>
      <DeleteButton
        setReviewsUpdated={setReviewsUpdated}
        author={author}
        comment_id={comment_id}
      />
      <p className="comment_body">{comment_body}</p>

      <Votes comment_id={comment_id} votes={votes} />
    </section>
  );
};

export default CommentCard;
