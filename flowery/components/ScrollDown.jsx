import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ScrollDown = ({ bottomRef }) => {
  return (
    <div className="absolute bottom-0 sm:bottom-24 lg:bottom-32 cursor-pointer">
      <ChevronDownIcon
        className="h-10 w-10 text-zinc-50 animate-bounce"
        onClick={() => {
          bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default ScrollDown;
