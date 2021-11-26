import ReviewCard from "./ReviewCard";
import { useParams } from "react-router";
import useReviews from "../../hooks/useReviews";
import { useState } from "react";
import Loading from "../reusabe_components/Loading";

const ReviewList = () => {
  const { category } = useParams();
  const [sortByFilter, setSortByFilter] = useState("");
  const { reviews, isLoading, error } = useReviews(category, sortByFilter);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSortByFilter(e.target.value);
  };

  if (isLoading) return <Loading />;
  if (error) return <p className="error_handling">{error}</p>;

  return (
    <main className="ReviewList">
      <div className="sort_by">
        <label id="sort_by_text" htmlFor="sort_by">
          Sort by
        </label>
        <select
          value={sortByFilter}
          onChange={handleOnChange}
          id="select_sort_by"
          name="sort_by"
          key="sort_by"
        >
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
        </select>
      </div>

      {reviews.map((review) => {
        return (
          <section key={review.review_id}>
            <ReviewCard review={review} />
            <div className="space_div"></div>
          </section>
        );
      })}
    </main>
  );
};

export default ReviewList;
