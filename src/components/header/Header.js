import React from "react";
import "./Header.css";
import Logo from "../../photos/amazon_logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ cart, user }] = useStateValue();

  const login = () => {
    if (user) auth.signOut();
  };

  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img src={Logo} alt="logo" className="header__logo" />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* the 3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__options">
            <span className="header__optionsLineOne">Hello {user?.email}</span>
            <span className="header__optionsLineTwo">
              {user ? "sign out" : "sign in"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionsLineOne">Returns</span>
            <span className="header__optionsLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionsLineOne">Your</span>
            <span className="header__optionsLineTwo">prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionsCart">
            <ShoppingCartIcon />
            <span className="header__optionsLineTwo header__cartCount">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
