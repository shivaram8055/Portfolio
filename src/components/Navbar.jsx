import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div
        className={`${styles.paddingX} w-full flex items-center fixed py-5 top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center w-m-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0.0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              ShivaRam &nbsp;
              <span className="sm:block hidden">| &nbsp;Musku</span>
            </p>
          </Link>
          <div className="nav-list">
            <ul className="list-none hidden sm:flex flex-grow gap-10">
              {navLinks.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white cursor-pointer text-[18px] font-medium`}
                    onClick={() => {
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sm:hidden flex flex-1 items-center justify-end">
            <img
              src={!toggle ? menu : close}
              alt="menu"
              className="h-[28px] w-[28px] object-contain cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 my-2 mx-4 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4 ">
                {navLinks.map((nav) => {
                  return (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                      } cursor-pointer text-[18px] font-poppins font-medium`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
