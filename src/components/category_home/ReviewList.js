import ReviewCard from "./ReviewCard";
import { useParams } from "react-router";
import useReviews from "../../hooks/useReviews";

const ReviewList = () => {
  const { category } = useParams();
  const { reviews, isLoading, error } = useReviews(category);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="ReviewList">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </main>
  );
};

export default ReviewList;
