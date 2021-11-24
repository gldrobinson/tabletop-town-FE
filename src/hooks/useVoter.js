import { useState } from "react";

const useVoter = (originalVote) => {
  const [addedVotes, setAddedVotes] = useState(0);

  const incVote = () => {
    setAddedVotes((currVote) => {
      return currVote + 1;
    });
  };

  const decVote = () => {
    setAddedVotes((currVote) => {
      if (currVote <= 0) {
        return 0;
      }
      return currVote - 1;
    });
  };

  return { addedVotes, incVote, decVote };
};

export default useVoter;
