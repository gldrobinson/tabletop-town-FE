import { useEffect, useState } from "react";
import { getUserInfo } from "../../utils/api";

const ProfileAvatar = ({ username }) => {
  const [avatar, setAvatar] = useState(
    "https://pngimg.com/uploads/circle/circle_PNG12.png"
  );
  useEffect(() => {
    getUserInfo(username)
      .then((userReceived) => {
        const { avatar_url } = userReceived;
        setAvatar(avatar_url);
      })
      .catch(() => {
        setAvatar("https://pngimg.com/uploads/circle/circle_PNG12.png");
      });
  }, []);
  return <img className="profile_img" src={avatar} alt="profile img" />;
};

export default ProfileAvatar;
