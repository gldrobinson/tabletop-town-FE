import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const useReviews = (category, sortBy, order) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviews(category, sortBy, order)
      .then((reviewsReceived) => {
        setIsLoading(false);
        setError(null);
        setReviews(reviewsReceived);
      })
      .catch((err) => {
        console.dir(err);
        setIsLoading(false);
        setError("category not found");
      });
  }, [category, sortBy, order]);

  return { reviews, isLoading, error };
};

export default useReviews;
