import { isTemplateElement } from "@babel/types";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BsFillSquareFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Links } from "./Links";

const Navbar = ({ background, page }) => {
  const [clicked, setClicked] = useState(false);
  const width = window.innerWidth;

  return (
    <header className={`header header--${background}`}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__title">
          Timebl
          <BsFillSquareFill size={25} className="header__logo" /> x
        </div>
      </Link>

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
              <Link
                to={link.url}
                className={
                  page === link.theme
                    ? `header__navlinks--link header__navlinks--link--chosen`
                    : `header__navlinks--link`
                }
              >
                <a>{link.title}</a>
              </Link>
            );
          })}
          <Link
            className={
              page === "signup"
                ? `header__navlinks--link--signup grey`
                : `header__navlinks--link--signup`
            }
            to="/signup"
          >
            <a>Sign Up</a>
          </Link>
        </div>
      }
    </header>
  );
};

export default Navbar;
