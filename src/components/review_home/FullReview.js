import moment from "moment";
import { useParams } from "react-router";
import useReview from "../../hooks/useReview";

const FullReview = () => {
  const { review_id } = useParams();
  const { review } = useReview(review_id);
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
      <p id="full_review_designer">
        {designer} - {category}
      </p>
      <p id="full_review_body">{review_body}</p>
      <img id="full_review_img" src={review_image_url} />
      <div className="votes_section">
        <span className="votes" role="img" aria-label="vote_up">
          ⬆️
        </span>
        <p id="full_review_votes" className="votes">
          {votes}
        </p>
        <span className="votes" ole="img" aria-label="vote_down">
          ⬇️
        </span>
      </div>
    </section>
  );
};

export default FullReview;
