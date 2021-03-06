import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

const CategorySelector = () => {
  const { categories, error } = useCategories();

  if (error) return <p className="error_handling">{error}</p>;

  return (
    <nav className="CategorySelector">
      {categories.map((category) => {
        return (
          <Link
            className="category"
            key={category.slug}
            to={`/reviews/category/${category.slug}`}
          >
            {category.slug}{" "}
          </Link>
        );
      })}
    </nav>
  );
};

export default CategorySelector;
