import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://tabletop-town.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category) => {
  return gamesApi
    .get("/reviews", {
      params: { category: category },
    })
    .then((res) => {
      console.log(res.data.reviews);
      return res.data.reviews;
    });
};
