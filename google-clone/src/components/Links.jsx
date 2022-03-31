import React from "react";
import { NavLink } from "react-router-dom";
import { SearchCircleIcon, NewspaperIcon, PhotographIcon, VideoCameraIcon } from '@heroicons/react/outline'


const links = [
  { url: "/search", text: "All", icon: <SearchCircleIcon className="h-5 w-5 text-neutral-800 dark:text-neutral-200 inline-flex mr-2"/>},
  { url: "/news", text: "News", icon: <NewspaperIcon className="h-5 w-5 text-neutral-800 dark:text-neutral-200 inline-flex mr-2"/> },
  { url: "/image", text: "Images", icon: <PhotographIcon className="h-5 w-5 text-neutral-800 dark:text-neutral-200 inline-flex mr-2"/> },
  { url: "/videos", text: "Videos", icon: <VideoCameraIcon className="h-5 w-5 text-neutral-800 dark:text-neutral-200 inline-flex mr-2"/> },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4 space-x-6">
      {links.map(({ url, text, icon, index }) => (
        <NavLink
          to={url}
          key={index}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              : "pb-2"
          }
        >
          {icon}{text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
