import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  const {
    title,
    category,
    review_id,
    designer,
    review_image_url,
    votes,
    owner,
    comment_count,
    review_created_at,
  } = review;

  const date = review_created_at.split("T")[0];

  const handleOnClick = (e) => {
    navigate(`/reviews/${review_id}`);
  };

  return (
    <section className="ReviewCard">
      <p className="reviewLabel">Review</p>
      <img
        onClick={handleOnClick}
        className="review_img"
        src={review_image_url}
        alt={designer}
      />
      <h3 onClick={handleOnClick} className="review_title">
        {title}
      </h3>
      {/* <h3 className="review_designer">{designer}</h3> */}

      {/* <p className="review_owner">{owner}</p> */}
      <p>{category}</p>
      <span className="review_date" role="img" aria-label="created_at">
        🕙 {date}
      </span>
      <span className="review_votes" role="img" aria-label="likes">
        👍 {votes}
      </span>
      <span className="review_comments" role="img" aria-label="comments">
        👁️‍🗨️ {comment_count}
      </span>
    </section>
  );
};

export default ReviewCard;
