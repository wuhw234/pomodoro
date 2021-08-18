import { isTemplateElement } from "@babel/types";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BiTime } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Links } from "./Links";

const Navbar = ({ background, page }) => {
  const [clicked, setClicked] = useState(false);
  const width = window.innerWidth;

  return (
    <header className={`header header--${background}`}>
      <div className="header__title">
        PomoBlock
        <BiTime size={40} className="header__logo" />
      </div>

      {clicked ? (
        <FaTimes
          onClick={() => setClicked(!clicked)}
          className="header__toggle"
          size={40}
        />
      ) : (
        <FaBars
          onClick={() => {
            setClicked(!clicked);
          }}
          className="header__toggle"
          size={40}
        />
      )}

      {
        <div
          className={clicked ? "header__navlinks" : "header__navlinks--hidden"}
        >
          {Links.map((link, index) => {
            return (
              <Link to={link.url}>
                <a
                  className={
                    page === link.theme
                      ? `header__navlinks--link grey`
                      : `header__navlinks--link`
                  }
                >
                  {link.title}
                </a>
              </Link>
            );
          })}
          <Link to="/signup">
            <a
              className={
                page === "signup"
                  ? `header__navlinks--link--signup grey`
                  : `header__navlinks--link--signup`
              }
            >
              Sign Up
            </a>
          </Link>
        </div>
      }
    </header>
  );
};

export default Navbar;
