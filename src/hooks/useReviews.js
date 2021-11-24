import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const useReviews = (category) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(category).then((reviewsReceived) => {
      setReviews(reviewsReceived);
    });
  }, [category]);

  return { reviews };
};

export default useReviews;
