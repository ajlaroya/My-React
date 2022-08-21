import React from "react";
import ProductCard from "./ProductCard";

const Featured = () => (
  <div class="hero min-h-screen bg-pink-400">
    <div class="hero-content text-center">
      <div class="text-white">
        <div className="flex justify-between w-full items-center my-10">
          <h1 class="text-3xl font-bold text-white">Featured</h1>
          <p>view all</p>
        </div>

        <ProductCard />
      </div>
    </div>
  </div>
);

export default Featured;
