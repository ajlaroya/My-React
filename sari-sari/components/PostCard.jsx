import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative overflow-hidden rounded-lg opacity-80 hover:opacity-100 ease-in-out duration-300 cursor-pointer">
        <img
          className="object-cover w-full h-48 "
          src={post.featuredImage.url}
          alt="Flower and sky"
        />

        <div className="absolute top-0 left-0 px-6 py-4">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-900">
            {post.title}
          </h4>
        </div>
      </div>

      {/* <a href="#">
        <img
          className="rounded-t-lg"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </a> */}
      <div className="p-5">
        <a href="#">
          {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5> */}
        </a>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.excerpt}
        </p>
        <Link href={`/post/${post.slug}`}>
          <button
            type="button"
            className=" cursor-pointer inline-flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2 ease-in duration-500"
          >
            Read More{" "}
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
    // <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    //   <div className="relative overflow-hidden shadow-lg pb-80 mb-6">
    //     <img
    //       src={post.featuredImage.url}
    //       alt={post.title}
    //       className="absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg opacity-90 transition duration-800 hover:opacity-100"
    //     />
    //   </div>
    //   <h1 className="transition duration-700 text-center mb-8 cursor:pointer hover:text-blue-600 text-3xl font-semibold">
    //     <Link href={`/post/${post.slug}`}>{post.title}</Link>
    //   </h1>
    //   <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
    //     <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
    //       <img
    //         src={post.author.photo.url}
    //         alt={post.author.name}
    //         height="30px"
    //         width="30px"
    //         className="align-middle rounded-full"
    //       />
    //       <p className="inline align-middle text-gray-700 ml-2 text-lg">
    //         {post.author.name}
    //       </p>
    //     </div>
    //     <div className="font-medium text-gray-700">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6 inline mr-2 text-blue-500"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    //         />
    //       </svg>
    //       <span className="align-middle">
    //         {moment(post.createdAt).format("MMM DD, YYYY")}
    //       </span>
    //     </div>
    //   </div>
    //   <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
    //     {post.excerpt}
    //   </p>
    //   <div className="text-center">
    //     <Link href={`/post/${post.slug}`}>
    //       <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-block text-sm font-medium rounded-full text-white px-8 py-3 cursor-pointer">
    //         Continue reading
    //       </span>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default PostCard;
