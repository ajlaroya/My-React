import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-200 shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="items-center space-y-5 inline-flex">
          <div className="w-12 h-12 flex shrink-0 items-center rounded-full uppercase font-bold text-white">
            <Image
              className="shadow-sm rounded-full"
              src={post.featuredImage.url}
              alt={post.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="ml-4">
            <p className="font-bold text-ellipsis overflow-hidden">
              <Link
                href={`/post/${post.slug}`}
                key={post.title}
                className="text-md"
              >
                {post.title}
              </Link>
            </p>
            <p className="text-sm text-gray-700 mt-1">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
