import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { getCategories } from "../services";

import sari from "../assets/images/sari.svg";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Header = ({ darkTheme, setDarkTheme }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-slate-200 py-6">
        <div className="md:float-left inline space-x-4">
          <Link passHref href="/">
            <span className="sari-sari cursor-pointer font-black text-3xl text-white transition duration-500 hover:scale-110">
              <div className="float-left pt-1 mr-2"><Image src={sari} alt="logo" height={30} width={30} /></div>
              sári-sarì
            </span>
          </Link>
          <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-white float-right p-2 shadow hover:shadow rounded-full">
            {darkTheme ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link passHref key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle sari-sari text-white ml-4 font-semibold cursor-pointer transform transition duration-500 hover:translate-y-1">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
