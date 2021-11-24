import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

const CategorySelector = () => {
  const { categories, isLoading, error } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <nav className="CategorySelector">
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/reviews/category/${category.slug}`}>
            {category.slug}{" "}
          </Link>
        );
      })}
    </nav>
  );
};

export default CategorySelector;
