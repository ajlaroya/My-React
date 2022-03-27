import React from 'react'
import { Link } from 'react-router-dom';

import Search from './Search'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-slate-700 border-slate-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl font-bold py-1 px-2 dark:text-slate-100">
            Sift 🧭
          </p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-slate-800 dark:text-slate-900 bg-slate-100 border rounded-full px-2 py-1 hover:shadow-lg">
          {darkTheme ? '🌞' : '🌛'}
        </button>
      </div>
      <Search />
    </div>
  )
}