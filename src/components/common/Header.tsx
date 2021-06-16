import React from "react";
import { Nav } from "../../config/Nav";
import { HeaderNavType } from "../../types/HeaderNavType";
import { Link } from "react-router-dom";

const Header: React.VFC = () => {
  return (
    <div className="bg-yellow-500 h-16 flex items-center justify-between px-28">
      <Link to="/">
        <div className="whiteFont text-2xl link">Anime Like</div>
      </Link>
      <div className="flex">
        {Nav.map((navItems: HeaderNavType) => {
          return (
            <div className="pr-8" key={navItems.title}>
              <Link to={navItems.to}>
                <div className="flex flex-col items-center justify-center link">
                  {navItems.img}
                  <div className="whiteFont text-xs pt-1">{navItems.title}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
