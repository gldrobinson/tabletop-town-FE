import { useEffect } from "react";
import { useState } from "react";
import useVoter from "../../hooks/useVoter";
import { patchReviewVote, patchCommentVote } from "../../utils/api";
import Loading from "./Loading";

const Votes = ({ review_id, votes, comment_id }) => {
  const { addedVotes, incVote, decVote } = useVoter(0);
  const [disableReviewButton, setDisableReviewButton] = useState(false);
  const [disableCommentButton, setDisableCommentButton] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!votes) {
  //     console.log("in !votes");
  //     setIsLoading(true);
  //   } else {
  //     console.log("in else");
  //     setIsLoading(false);
  //   }
  // }, [votes]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  const handleUpVote = () => {
    if (!comment_id) {
      if (!disableReviewButton) {
        incVote();
        setDisableReviewButton(true);
        patchReviewVote(review_id, 1).catch((err) => {
          decVote();
          return (
            <p className="error_handling">Sorry something went wrong...</p>
          );
        });
      }
    } else {
      if (!disableCommentButton) {
        incVote();
        setDisableCommentButton(true);
        patchCommentVote(comment_id, 1).catch((err) => {
          decVote();
          return (
            <p className="error_handling">Sorry something went wrong...</p>
          );
        });
      }
    }
  };

  const handleDownVote = () => {
    if (!comment_id) {
      if (!disableReviewButton) {
        decVote();
        setDisableReviewButton(true);
        patchReviewVote(review_id, -1).catch((err) => {
          incVote();
          return (
            <p className="error_handling">Sorry something went wrong...</p>
          );
        });
      }
    } else {
      if (!disableCommentButton) {
        decVote();
        setDisableCommentButton(true);
        patchCommentVote(comment_id, -1).catch((err) => {
          incVote();
          return (
            <p className="error_handling">Sorry something went wrong...</p>
          );
        });
      }
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
