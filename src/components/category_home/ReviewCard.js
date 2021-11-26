import { useNavigate } from "react-router";
import moment from "moment";
import { Link } from "react-router-dom";
import ProfileAvatar from "../reusabe_components/ProfileAvatar";

const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  const {
    title,
    review_id,
    designer,
    review_image_url,
    votes,
    owner,
    comment_count,
    review_created_at,
  } = review;

  const date = new Date(review_created_at);
  const timeAgo = moment(date).fromNow();

  const handleOnClick = (e) => {
    navigate(`/reviews/${review_id}`);
  };

  return (
    <section className="ReviewCard">
      <div className="profile_section">
        <ProfileAvatar username={owner} />
        <p className="profile_author">{owner}</p>
        <p className="time">{timeAgo}</p>
      </div>

      <Link to={`/reviews/${review_id}`} className="reviewCard_title">
        {title}
      </Link>

      <div className="review_interaction">
        <span className="votes" role="img" aria-label="vote_up">
          ⬆️
        </span>
        <p id="full_review_votes" className="votes">
          {votes}
        </p>
        <span
          onClick={handleOnClick}
          className="votes"
          role="img"
          aria-label="vote_up"
        >
          🗨️
        </span>
        <p id="comment_count" className="votes">
          {comment_count}
        </p>
      </div>
      <img
        onClick={handleOnClick}
        className="review_card_img"
        src={review_image_url}
        alt={designer}
      />
    </section>
  );
};

export default ReviewCard;
