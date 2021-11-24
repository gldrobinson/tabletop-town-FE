import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCategories()
      .then((categoriesReceived) => {
        setIsLoading(false);
        setError(null);
        setCategories(categoriesReceived);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Sorry something went wrong!");
        console.log(err);
      });
  }, []);

  return { categories, isLoading, error };
};

export default useCategories;
