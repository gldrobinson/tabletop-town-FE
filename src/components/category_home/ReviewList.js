import ReviewCard from "./ReviewCard";
import { useParams } from "react-router";
import useReviews from "../../hooks/useReviews";
import { useEffect, useState } from "react";

const ReviewList = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);
  const { reviews, isLoading, error } = useReviews(category, sortBy, order);

  const handleSortBy = (e) => {
    console.log(e.target.value);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const queries = e.target.value.split("/");
    setSortBy(queries[0]);
    setOrder(queries[1]);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="ReviewList">
      <form onChange={handleOnChange} className="sort_by_filter">
        <label htmlFor="sort_by">Sort by:</label>
        <select id="sort_by" name="sort_by">
          <option key="review_created_at/desc" value="review_created_at/desc">
            Recent
          </option>
          <option key="review_created_at/asc" value="review_created_at/asc">
            Oldest
          </option>
          <option key="comment_count/desc" value="comment_count/desc">
            Most comments
          </option>
          <option key="comment_count/asc" value="comment_count/asc">
            Least comments
          </option>
          <option key="votes/desc" value="votes/desc">
            Highest rating
          </option>
          <option key="votes/asc" value="votes/asc">
            Lowest rating
          </option>
          <input type="submit"></input>
        </select>
      </form>
      {reviews.map((review) => {
        return (
          <section>
            <ReviewCard key={review.review_id} review={review} />
            <div className="space_div"></div>
          </section>
        );
      })}
    </main>
  );
};

export default ReviewList;
