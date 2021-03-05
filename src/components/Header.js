import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="header-logo"
      />
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-line1">Hello Guest</span>
          <span className="header-option-line2">Sign in</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Return</span>
          <span className="header-option-line2">Order</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">You</span>
          <span className="header-option-line2">Prime</span>
        </div>
      </div>
      <div className="header-option-basket">
        <ShoppingBasketOutlinedIcon />
        <span className="header-option-line2 header-basket-count">0</span>
      </div>
    </div>
  );
}

export default Header;
