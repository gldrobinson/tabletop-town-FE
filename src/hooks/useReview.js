import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviewById } from "../utils/api";

const useReview = (review_id) => {
  const [review, setReview] = useState({});

  useEffect(() => {
    getReviewById(review_id)
      .then((reviewReceived) => {
        setReview(reviewReceived);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { review };
};

export default useReview;
