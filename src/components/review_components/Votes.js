import useVoter from "../../hooks/useVoter";
import { patchReviewVote, patchCommentVote } from "../../utils/api";

const Votes = ({ review_id, votes, comment_id }) => {
  const { addedVotes, incVote, decVote } = useVoter(0);

  const handleUpVote = () => {
    incVote();
    if (!comment_id) {
      patchReviewVote(review_id, 1);
    } else {
      patchCommentVote(comment_id, 1);
    }
  };

  const handleDownVote = () => {
    decVote();
    if (!comment_id) {
      patchReviewVote(review_id, -1);
    } else {
      patchCommentVote(comment_id, -1);
    }
  };

  return (
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
  );
};

export default Votes;
