import moment from "moment";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const timeAgo = moment(date).fromNow();
  return timeAgo;
};

export default formatDate;
