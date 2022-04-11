import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="bg-white rounded-lg shadow-lg hover:cursor-pointer ease-in-out duration-500 hover:scale-105">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width="100%"
          height="70%"
          layout="responsive"
          className="rounded-t-lg h-48 w-full object-cover"
          quality="50"
        />
        <div className="p-6">
          <h2 className="sari-sari font-bold mb-2 text-2xl text-gray-800">
            {post.title}
          </h2>
          <h3 className="text-gray-700 mb-2">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </h3>
          <p className="text-gray-700 mb-2">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
