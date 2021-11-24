import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

const CategorySelector = () => {
  const { categories } = useCategories();

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
