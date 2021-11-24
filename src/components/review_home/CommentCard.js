import moment from "moment";
import useVoter from "../../hooks/useVoter";
import { patchCommentVote } from "../../utils/api";

const CommentCard = ({ comment }) => {
  const { author, comment_body, comment_created_at, comment_id, votes } =
    comment;
  const { addedVotes, incVote, decVote } = useVoter(0);

  const date = new Date(comment_created_at);
  const timeAgo = moment(date).fromNow();

  const handleUpVote = () => {
    incVote();
    patchCommentVote(comment_id, 1);
  };

  const handleDownVote = () => {
    decVote();
    patchCommentVote(comment_id, -1);
  };

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
        <span
          onClick={handleUpVote}
          className="votes"
          role="img"
          aria-label="vote_up"
        >
          ⬆️
        </span>
        <p className="votes">{votes + addedVotes}</p>
        <span
          onClick={handleDownVote}
          className="votes"
          ole="img"
          aria-label="vote_down"
        >
          ⬇️
        </span>
      </div>
    </section>
  );
};

export default CommentCard;
