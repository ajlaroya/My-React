import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

import { useResultContext } from '../contexts/ResultContextProvider'
import Links from './Links'

import { XCircleIcon } from '@heroicons/react/outline'

const Search = () => {
  const [text, setText] = useState()
  const { setSearchTerm } = useResultContext()
  const [debouncedValue] = useDebounce(text, 300)

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])
  
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-neutral-900 dark:text-white border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Sift or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button type="button" className="absolute top-3.5 right-4 text-2xl text-neutral-500 items-center" onClick={() => setText('')}>
          <XCircleIcon className="h-5 w-5 text-neutral-500 items-center" />
        </button>
      )}
      <Links />
    </div>
  )
}

export default Search