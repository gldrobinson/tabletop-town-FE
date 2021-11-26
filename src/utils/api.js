import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://tabletop-town.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category, sortBy, order) => {
  return gamesApi
    .get("/reviews", {
      params: { category: category, sort_by: sortBy, order: order },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getReviewById = (id) => {
  return gamesApi.get(`/reviews/${id}`).then((res) => {
    return res.data.review;
  });
};

export const getComments = (id) => {
  return gamesApi.get(`/reviews/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchReviewVote = (id, increment) => {
  return gamesApi
    .patch(`/reviews/${id}`, {
      inc_votes: increment,
    })
    .then((res) => {
      return res.data.review;
    });
};

export const patchCommentVote = (id, increment) => {
  return gamesApi
    .patch(`/comments/${id}`, {
      inc_votes: increment,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const postComment = (id, body, username) => {
  return gamesApi
    .post(`/reviews/${id}/comments`, {
      username: username,
      comment_body: body,
    })
    .then((res) => {
      console.log(res.data);
    });
};
