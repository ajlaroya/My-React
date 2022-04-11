import React from "react";
import moment from "moment";
import Link from "next/link";
import { BsStars } from "react-icons/bs";

const FeaturedPostCard = ({ post }) => (
  <Link href={`/post/${post.slug}`}>
    <div className="relative h-72 bg-white rounded-lg">
      <div className="bg-white absolute z-50 w-full h-full rounded-lg opacity-25 hover:opacity-0 ease-in-out duration-500 cursor-pointer hover:scale-125"></div>
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover inline-block w-full h-72"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="mb-4 font-semibold text-xs">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="sari-sari mb-4 font-bold text-center">{post.title}</p>
        <div className="flex absolute top-5 w-full">
          <p className="inline ml-5 bg-black transparent p-1 rounded-full">
            <BsStars className="text-white" />
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default FeaturedPostCard;
