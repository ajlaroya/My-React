import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="relative overflow-hidden rounded-lg opacity-80 hover:opacity-100 ease-in-out duration-300 cursor-pointer">
          <img
            className="object-cover w-full h-48 "
            src={post.featuredImage.url}
            alt={post.title}
          />

          <div className="absolute top-8 px-6 py-4 align-middle items-center justify-center">
            <h4 className="mb-3 text-xl text-center text-middle font-semibold tracking-tight text-gray-900">
              {post.title}
            </h4>
          </div>
        </div>

        <div className="p-5 cursor-pointer">
          <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
