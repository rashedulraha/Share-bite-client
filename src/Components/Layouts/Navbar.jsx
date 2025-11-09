import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaBoxOpen, FaBars, FaTimes } from "react-icons/fa";
import Container from "../Responsive/Container";
import { SiIfood } from "react-icons/si";
import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuLink = (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8 font-medium ">
        <NavLink
          to={"/"}
          className="flex items-center gap-2 hover:text-primary transition-all">
          <FaHome className="text-primary" />
          Home
        </NavLink>
        <NavLink
          to={"/available-foods"}
          className="flex items-center gap-2 hover:text-primary transition-all">
          <FaBoxOpen className="text-primary" />
          Available Foods
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="bg-base-100/95 backdrop-blur-sm sticky top-0 z-50">
      <Container>
        <div className="navbar ">
          {/* Logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-64 p-4 shadow-xl border border-base-300">
                {MenuLink}
              </ul>
            </div>

            <Link to="/" className="flex items-center gap-3">
              <div className=" flex items-center justify-center font-bold text-2xl ">
                <SiIfood />
              </div>
              <span className="text-2xl font-bold hidden sm:block">
                Share <span className="text-primary">bite</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{MenuLink}</ul>
          </div>

          {/* Right Side: Theme + User/ */}
          <div className="navbar-end flex items-center gap-5">
            {/* Theme toggle */}
            <ThemeToggle />
            <Link
              to="/login"
              className="btn btn-primary rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
