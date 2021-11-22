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
      <h3>{designer}</h3>
      <img src={review_image_url} alt={designer} />
      <h4>{title}</h4>
      <h5>{owner}</h5>
      <p>{review_created_at}</p>
      <p>{votes}</p>
      <p>{comment_count}</p>
    </section>
  );
};

export default ReviewCard;
