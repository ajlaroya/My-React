import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import Logo from "../utils/shape-57.svg";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-100 py-2 px-4">
      <Link href="/">
        <div className="w-[40px] md:w-[50px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="Azalea"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
