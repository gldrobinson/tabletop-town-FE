import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviewById } from "../../utils/api";

const FullReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getReviewById(review_id)
      .then((reviewReceived) => {
        setReview(reviewReceived);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  return (
    <section>
      <p>{title}</p>
      <p>{category}</p>
      <p>{designer}</p>
      <p>{owner}</p>
      <p>{review_body}</p>
      <p>{votes}</p>
      <img className="review_img" src={review_image_url} />
      <p>{review_created_at}</p>
    </section>
  );
};

export default FullReview;
