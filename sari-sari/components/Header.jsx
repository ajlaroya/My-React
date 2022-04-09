import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { getCategories } from "../services";

import sari from "../assets/images/sari.svg";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-slate-200 py-6">
        <div className="md:float-left block">
          <Link href="/">
            <span className="sari-sari cursor-pointer font-black text-3xl text-white inline-flex gap-x-3 items-center hover:animate-pulse">
              <Image src={sari} alt="logo" height={30} width={30} />
              sári-sarì
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle sari-sari text-white ml-4 font-semibold cursor-pointer">
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
