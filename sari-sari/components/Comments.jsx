import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import Avvvatars from "avvvatars-react";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-3">
                <Avvvatars
                  style="shape"
                  value={comment.name}
                  className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                <strong>{comment.name}</strong>{" "}
                <span className="text-xs text-gray-400">
                  {moment(comment.createdAt).format("MMMM Do YYYY, h:mm a")}
                </span>
                <p className="">{comment.comment}</p>
                {/* <div className="mt-4 flex items-center">
              <div className="flex -space-x-2 mr-2">
                <img
                  className="rounded-full w-6 h-6 border border-white"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt=""
                />
                <img
                  className="rounded-full w-6 h-6 border border-white"
                  src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm text-gray-500 font-semibold">5 Replies</div>
            </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
