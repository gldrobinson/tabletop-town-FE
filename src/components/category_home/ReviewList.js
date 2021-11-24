import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../../utils/api";
import { useParams } from "react-router";

const ReviewList = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(category).then((reviewsReceived) => {
      setReviews(reviewsReceived);
    });
  }, [category]);

  return (
    <main className="ReviewList">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </main>
  );
};

export default ReviewList;
