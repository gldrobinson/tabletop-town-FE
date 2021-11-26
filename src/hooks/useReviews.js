import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const useReviews = (category, sortByFilter) => {
  let sortBy;
  let order;

  if (sortByFilter) {
    const queries = sortByFilter.split("/");
    sortBy = queries[0];
    order = queries[1];
  }
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
        if (!err.response.status) {
          setError("sorry something went wrong!");
        } else if (err.response.status === 404) {
          setError("category not found");
        } else if (err.response.status === 404) {
          setError("category is invalid");
        } else {
          setError("sorry something went wrong!");
        }
      });
  }, [category, sortBy, order]);

  return { reviews, isLoading, error };
};

export default useReviews;
