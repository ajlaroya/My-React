import React from "react";
import ProductCard from "./ProductCard";

const Featured = () => (
  <div className="hero min-h-screen bg-pink-400 pb-10">
    <div className="hero-content text-center">
      <div className="text-white">
        <div className="flex justify-between w-full items-center py-8">
          <h1 className="text-3xl font-bold text-white">Featured</h1>
          <p>view all</p>
        </div>

        <ProductCard />
      </div>
    </div>
  </div>
);

export default Featured;
