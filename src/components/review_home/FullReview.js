import moment from "moment";
import { useParams } from "react-router";
import useReview from "../../hooks/useReview";
import { Link } from "react-router-dom";

import Votes from "../review_components/Votes";

const FullReview = () => {
  const { review_id } = useParams();
  const { review, isLoading, error } = useReview(review_id);

  const {
    title,
    category,
    designer,
    review_image_url,
    votes,
    owner,
    review_body,
    review_created_at,
  } = review;

  const date = new Date(review_created_at);
  const timeAgo = moment(date).fromNow();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="FullReview">
      <div id="full_review_profile" className="profile_section">
        <img
          className="profile_img"
          src="https://pngimg.com/uploads/circle/circle_PNG12.png"
          alt="profile img"
        />
        <p className="profile_author">{owner}</p>
        <p className="time">{timeAgo}</p>
      </div>
      <h3 id="full_review_title">{title}</h3>

      <p id="full_review_body">{review_body}</p>
      <div className="image_container">
        <img class="full_review_img" src={review_image_url} />
        <p className="full_review_designer">{designer}</p>
        <Link
          to={`/reviews/category/${category}`}
          className="full_review_designer"
        >
          {category}
        </Link>
      </div>
      <Votes review_id={review_id} votes={votes} />
    </section>
  );
};

export default FullReview;
