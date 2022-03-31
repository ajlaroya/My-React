import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/images/explorer-dynamic-gradient.png'
import Search from './Search'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-neutral-700 border-neutral-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl font-bold py-1 px-2 dark:text-neutral-100 inline-flex items-baseline">
            Sift <img className="self-center w-9 h-9" src={logo} alt="sift logo" />
          </p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-neutral-800 dark:text-neutral-900 bg-neutral-50 border rounded-full px-2 py-1 hover:shadow-lg">
          {darkTheme ? '🌞' : '🌛'}
        </button>
      </div>
      <Search />
    </div>
  )
}