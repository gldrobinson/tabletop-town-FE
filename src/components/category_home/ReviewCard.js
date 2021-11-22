const ReviewCard = ({ review }) => {
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

  return (
    <section className="ReviewCard">
      <h3 className="review_designer">{designer}</h3>
      <img className="review_img" src={review_image_url} alt={designer} />
      <h4 className="review_title">{title}</h4>
      <h5 className="review_owner">{owner}</h5>
      <p className="review_time">{review_created_at}</p>
      <p>Votes: {votes}</p>
      <p>Comments: {comment_count}</p>
    </section>
  );
};

export default ReviewCard;
