import React from "react";

import "material-icons/iconfont/material-icons.css";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl">arvoblooms 🌺</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <span class="material-icons-outlined">search</span>
        </button>
        <button class="btn btn-ghost btn-circle">
          <span class="material-icons-outlined">account_circle</span>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <span class="material-icons-outlined">shopping_cart</span>
            <span class="badge badge-xs badge-secondary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
