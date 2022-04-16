import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { BsStars } from "react-icons/bs";

const FeaturedPostCard = ({ post }) => (
  <Link passHref href={`/post/${post.slug}`}>
    <div className="relative h-72 dark:opacity-80 rounded-lg">
      <div className="bg-white dark:bg-gray-900 absolute z-50 w-full h-full rounded-lg opacity-20 hover:opacity-0 ease-in-out duration-500 cursor-pointer"></div>
      <div className="absolute rounded-lg w-full h-full">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="fill"
          quality="50"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="mb-4 font-semibold text-xs">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="sari-sari mb-4 font-bold text-center">{post.title}</p>
        <div className="flex absolute top-5 w-full">
          <p className="inline ml-5 bg-black/80 p-2 rounded-full">
            <BsStars className="text-white text-sm" />
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default FeaturedPostCard;
