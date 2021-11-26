import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link className="header_title" to="/">
        Tabletop Town
      </Link>
    </header>
  );
};

export default Header;
