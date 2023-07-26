import React from "react";
import logo from "../../assest/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar   static  mb-12 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="ml-5 pt-2">Home</li>
            <li className="ml-5 pt-2">About us</li>
            <li className="ml-5 pt-2">Tour</li>
            <li className="lg:ml-24 ml-5 pt-2">Login</li>
            <li className="ml-5  pt-2 btn-stayle">Register</li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-28" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  p-0">
          <li className="ml-5 pt-2">Home</li>
          <li className="ml-5 pt-2">About us</li>
          <li className="ml-5 pt-2">Tour</li>
          <li className="ml-24 pt-2">Login</li>
          <li className="ml-5  pt-2 btn-stayle  ">Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
