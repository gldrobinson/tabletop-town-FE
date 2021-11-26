import CategorySelector from "./CategorySelector";
import ReviewList from "./ReviewList";
import Header from "../Header";

const CategoryHome = () => {
  return (
    <main className="CategoryHome">
      <Header />
      <h3>Categories</h3>
      <CategorySelector />
      <ReviewList />
    </main>
  );
};

export default CategoryHome;
