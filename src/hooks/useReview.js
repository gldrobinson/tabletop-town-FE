import { useEffect, useState } from "react";

import { getReviewById } from "../utils/api";

const useReview = (review_id) => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then((reviewReceived) => {
        setIsLoading(false);
        setError(null);
        setReview(reviewReceived);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status === 404) {
          setError("Review not found");
        } else {
          setError("Review not allowed");
        }
      });
  }, []);

  return { review, isLoading, error };
};

export default useReview;
