import React from "react";
import "material-icons/iconfont/material-icons.css";

const Search = () => {
  return (
    <section>
      <div className="hero min-h-1/2 mx-auto">
        <div className="hero-content p-10 w-full">
          <div className="flex justify-between gap-3">
            <button className="btn btn-outline btn-secondary">
              <span className="material-icons-outlined">tune</span>
            </button>
            <input
              type="text"
              placeholder="Search flowers 🍃"
              className="input input-bordered input-secondary w-96"
            />
            <button className="btn btn-outline btn-secondary">
              <span className="material-icons-outlined">search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
