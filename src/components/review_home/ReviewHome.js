import FullReview from "./FullReview";
import CommentsList from "./CommentsList";
import Header from "../Header";

const ReviewHome = () => {
  return (
    <main className="ReviewHome">
      <Header />
      <FullReview />
      <CommentsList />
    </main>
  );
};

export default ReviewHome;
