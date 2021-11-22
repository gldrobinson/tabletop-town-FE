import CategorySelector from "./CategorySelector";
import ReviewList from "./ReviewList";

const CategoryHome = () => {
  return (
    <main className="CategoryHome">
      <h2>Category Home</h2>
      <CategorySelector />
      <ReviewList />
    </main>
  );
};

export default CategoryHome;
