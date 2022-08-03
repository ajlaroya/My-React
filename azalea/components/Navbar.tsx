import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { FiLogOut } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import { IUser } from '../types';
import Logo from "../utils/shape-57.svg";
import { createOrGetUser } from "../utils";

import useAuthStore from "../store/authStore";

const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();
  const { userProfile, addUser, removeUser } = useAuthStore();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

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

      <div>Search</div>

      <div>
        {user ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="btn btn-ghost p-2 md:p-2 font-semibold flex items-center gap-2 rounded">
                <IoMdAdd className="text-xl" /> {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {user.image && (
              <Link href="/">
                <div className="w-10 h-10 relative mt-1">
                  <Image
                    layout="fill"
                    className="rounded-full"
                    src={user.image}
                    alt="avatar"
                  />
                </div>
              </Link>
            )}
            <button
              type="button"
              className="btn btn-ghost p-2 md:p-2 font-semibold flex items-center gap-2 rounded"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <FiLogOut className="text-xl" />
              <span className="hidden md:block">Logout</span>
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
