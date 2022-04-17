import React from "react";
import moment from "moment";
import Head from "next/head";
import { BsCalendarEvent } from "react-icons/bs";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-200 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1 className="sari-sari pt-4 px-4 lg:pt-0 mb-8 text-2xl lg:text-4xl font-black text-center">
        {post.title}
      </h1>
      <div className="relative overflow-hidden shadow mb-6 rounded-lg">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width="100%"
          height="100%"
          layout="responsive"
          className="object-top h-full w-full"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-4 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
            />
            <p className="inline align-middle font-medium text-gray-700 dark:text-gray-200 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 dark:text-gray-200">
            <BsCalendarEvent className="h-6 w-6 inline mr-2 text-gray-800 dark:text-gray-200" />
            <span className="align-middle">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <RichText
          content={post.content.raw}
          renderers={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold py-3">{children}</h1>
            ),
            bold: ({ children }) => <strong>{children}</strong>,
            ul: ({ children }) => (
              <ul className="list-disc list-inside leading-loose">
                {children}
              </ul>
            ),
            p: ({ children }) => (
              <p className="text-base leading-loose py-1">{children}</p>
            ),
            code: ({ children }) => (
              <code className="bg-gray-200 text-gray-800 border rounded-lg p-1">{children}</code>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default PostDetail;
