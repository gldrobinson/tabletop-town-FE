import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../../utils/api";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviewsReceived) => {
      setReviews(reviewsReceived);
    });
  }, []);

  return (
    <main className="ReviewList">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </main>
  );
};

export default ReviewList;
