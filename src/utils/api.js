import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://tabletop-town.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = () => {
  return gamesApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
