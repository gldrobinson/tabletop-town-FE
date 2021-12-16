import DeleteButton from "../reusable_components/DeleteButton";
import Votes from "../reusable_components/Votes";
import ProfileAvatar from "../reusable_components/ProfileAvatar";
import { useState } from "react";
import Loading from "../reusable_components/Loading";
import formatDate from "../../utils/formatDate";

const CommentCard = ({ comment, setReviewsUpdated }) => {
  const { author, comment_body, comment_created_at, comment_id, votes } =
    comment;
  const [isLoading, setIsLoading] = useState(false);

  const timeAgo = formatDate(comment_created_at);

  if (isLoading) return <Loading />;

  return (
    <section className="CommentCard">
      <div className="profile_section">
        <ProfileAvatar username={author} />
        <p className="profile_author">{author}</p>
        <p className="time">{timeAgo}</p>
      </div>
      <DeleteButton
        setReviewsUpdated={setReviewsUpdated}
        author={author}
        comment_id={comment_id}
        setIsLoading={setIsLoading}
      />
      <p className="comment_body">{comment_body}</p>

      <Votes comment_id={comment_id} votes={votes} />
    </section>
  );
};

export default CommentCard;
