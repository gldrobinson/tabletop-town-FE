import moment from "moment";
import { useParams } from "react-router";
import useReview from "../../hooks/useReview";
import useVoter from "../../hooks/useVoter";
import { patchVote } from "../../utils/api";

const FullReview = () => {
  const { review_id } = useParams();
  const { review, isLoading, error } = useReview(review_id);
  const { addedVotes, incVote, decVote } = useVoter(0);

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

  const handleUpVote = () => {
    incVote();
    patchVote(review_id, 1);
  };

  const handleDownVote = () => {
    decVote();
    patchVote(review_id, -1);
  };

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
      <p id="full_review_designer">
        {designer} - {category}
      </p>
      <p id="full_review_body">{review_body}</p>
      <img id="full_review_img" src={review_image_url} />
      <div className="votes_section">
        <span
          onClick={handleUpVote}
          className="votes"
          role="img"
          aria-label="vote_up"
        >
          ⬆️
        </span>
        <p id="full_review_votes" className="votes">
          {votes + addedVotes}
        </p>
        <span
          onClick={handleDownVote}
          className="votes"
          ole="img"
          aria-label="vote_down"
        >
          ⬇️
        </span>
      </div>
    </section>
  );
};

export default FullReview;
