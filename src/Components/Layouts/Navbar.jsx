import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaBars,
  FaTimes,
  FaHandsHelping,
  FaListUl,
  FaBookReader,
} from "react-icons/fa";

import { FaUser } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import Container from "../Responsive/Container";
import { SiIfood } from "react-icons/si";
import ThemeToggle from "../Theme/ThemeToggle";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const photoURL = user?.photoURL;
  const displayName = user?.displayName;

  const handleUserLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22d3a6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Me logout",
    }).then((result) => {
      if (result.isConfirmed) {
        signout().then(() => {
          navigate("/auth/login");
        });
        Swal.fire({
          title: "Logout successfully",
          text: "Your account has been logout.",
          icon: "success",
        });
      }
    });
  };

  const loginUser = (
    <>
      <div className="dropdown md:dropdown-end ">
        <div tabIndex={0} role="button">
          {user && (
            <div
              className="md:tooltip md:tooltip-bottom flex items-center justify-center"
              data-tip={`${displayName}`}>
              <img
                className="-full border hover:bg-primary hover:text-white transition-all w-8 md:w-10 h-8 md:h-10 cursor-pointer rounded-full"
                src={photoURL}
                alt="user Image"
              />
            </div>
          )}
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-5 md:mt-4 w-60 p-4 shadow-xl border border-base-300 space-y-3">
          <Link
            to={"/user-profile"}
            className="flex items-center w-full md:w-fit text-start sm:text-center gap-2 hover:text-primary transition-all">
            <FaUser className="text-primary" />
            Profile
          </Link>
          <Link
            to={"/my-request"}
            className="flex items-center w-full md:w-fit text-start sm:text-center gap-2 hover:text-primary transition-all">
            <FaHandsHelping className="text-primary" />
            My Requests
          </Link>
          <Link
            to={"/my-listings"}
            className="flex items-center w-full md:w-fit text-start sm:text-center gap-2 hover:text-primary transition-all">
            <FaListUl className="text-primary" />
            My Listings
          </Link>
        </ul>
      </div>
    </>
  );

  const MenuLink = (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8 font-medium ">
        <NavLink
          to={"/"}
          className="flex items-center w-full md:w-fit text-start sm:text-center gap-2 hover:text-primary transition-all">
          <FaHome className="text-primary" />
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className="flex items-center w-full  lg:w-fit  text-start gap-2 hover:text-primary transition-all">
          <FaBookReader className="text-primary" />
          About
        </NavLink>
        <NavLink
          to={"/available-foods"}
          className="flex items-center w-full  md:w-fit  text-start gap-2 hover:text-primary transition-all">
          <FaBoxOpen className="text-primary" />
          Available Foods
        </NavLink>
        <NavLink
          to={"/add-food"}
          className="flex items-center w-full  lg:w-fit  text-start gap-2 hover:text-primary transition-all">
          <IoIosAddCircle className="text-primary" />
          Add Food
        </NavLink>

        <div className="flex items-start md:hidden bg-base-200 w-full p-2 rounded-full ">
          <div className="flex space-x-3 items-center">
            {loginUser}
            <div>
              <h1>Account</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-base-100/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
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
            {user ? (
              <div className="flex items-center gap-5">
                <div className="items-center justify-center hidden md:flex">
                  {loginUser}
                </div>
                <button
                  onClick={handleUserLogout}
                  className="btn btn-primary rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-primary rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
