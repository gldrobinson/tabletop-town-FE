import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../utils/api";

const CategorySelector = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then((categoriesReceived) => {
        setCategories(categoriesReceived);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
