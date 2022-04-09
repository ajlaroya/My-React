import Link from "next/link";
import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="container mx-auto px-10 mb-0">
      <div className="border-t w-full inline-block border-slate-200 py-6">
        <div className="md:float-left block">
          <Link href="/">
            <span className="sari-sari cursor-pointer font-black text-md text-white inline-flex gap-x-3 items-center hover:animate-pulse">
              © 2022 Arthur Laroya
              <br />
              all rights reserved
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <a
            href="https://www.linkedin.com/in/arthurlaroya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="md:float-right mt-2 align-middle text-xl text-white ml-4 font-semibold cursor-pointer">
              <BsLinkedin />
            </span>
          </a>
          <a
            href="https://github.com/ajlaroya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="md:float-right mt-2 align-middle text-xl text-white ml-4 font-semibold cursor-pointer">
              <BsGithub />
            </span>
          </a>
          <a
            href="mailto:arthur.j.laroya@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="md:float-right mt-2 align-middle text-xl text-white ml-4 font-semibold cursor-pointer">
              <HiMail />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
