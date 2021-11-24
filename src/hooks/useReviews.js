import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const useReviews = (category) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviews(category)
      .then((reviewsReceived) => {
        setIsLoading(false);
        setError(null);
        setReviews(reviewsReceived);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("category not found");
      });
  }, [category]);

  return { reviews, isLoading, error };
};

export default useReviews;
