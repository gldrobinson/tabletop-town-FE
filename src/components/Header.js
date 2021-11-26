import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="Header">
      <Link className="header_title" to="/">
        Tabletop Town
      </Link>
      <h2>{user.username}</h2>
    </header>
  );
};

export default Header;
