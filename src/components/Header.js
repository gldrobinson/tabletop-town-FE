import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../contexts/UserContext";
import ProfileAvatar from "./reusable_components/ProfileAvatar";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="Header">
      <Link className="header_title" to="/">
        Tabletop Town
      </Link>
      <div className="current_user">
        <ProfileAvatar username={user.username} />
        <h2 className="current_user_username">{user.username}</h2>
      </div>
    </header>
  );
};

export default Header;
