import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
const useCategories = () => {
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

  return { categories };
};

export default useCategories;
