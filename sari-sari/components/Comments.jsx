import React, { useState, useEffect } from "react";
import moment from "moment";
import Avvvatars from "avvvatars-react";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);

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
              <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed mb-5">
                <strong>{comment.name}</strong>{" "}
                <span className="text-xs text-gray-400">
                  {moment(comment.createdAt).format("MMMM Do YYYY, h:mm a")}
                </span>
                <p className="">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
