import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

const useComments = (review_id, reviewsUpdated) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id)
      .then((commentsReceived) => {
        setIsLoading(false);
        setError(null);
        setComments(commentsReceived);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("sorry something went wrong!");
      });
  }, [reviewsUpdated]);

  return { comments, error, isLoading };
};

export default useComments;
