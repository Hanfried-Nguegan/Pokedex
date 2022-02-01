import React from 'react'

function SearchBar() {
  return (
    <div className="relative m-auto flex w-[80%] items-center">
      <input
        type="text"
        placeholder="Search a Pokemon"
        className="m-5 flex h-16 w-[100%] rounded-[50px] p-5 text-gray-500 shadow-inner outline-none"
      />
      <button className="absolute right-0 mr-8 h-12 w-12 rounded-full bg-yellow-400 text-gray-500 shadow-xl duration-200 active:scale-90 ">
        Go
      </button>
    </div>
  )
}

export default SearchBar
