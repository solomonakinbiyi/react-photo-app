import React from "react";
import "../stylesheets/Header.css";
import IconButton from "@material-ui/core/IconButton";
import MonochromePhotosIcon from "@material-ui/icons/MonochromePhotos";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <Link to="/addpost">
          <IconButton className="header__icnBtn">
            <div>
              <MonochromePhotosIcon className="header__logo" />
              <span className="header__logoDescription">Photodiary</span>
            </div>
          </IconButton>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
