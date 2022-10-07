import React from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const ScrollDown = ({ bottomRef }) => {
  return (
    <div className="absolute bottom-0 sm:bottom-24 lg:bottom-32 cursor-pointer">
      <ArrowDownCircleIcon
        className="h-14 w-14 text-gray-50 animate-bounce"
        onClick={() => {
          bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default ScrollDown;
