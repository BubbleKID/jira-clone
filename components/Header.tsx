'use client';

import React from 'react'
import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/BoardStore';

function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
      state.searchString,
      state.setSearchString,
  ]);

  return (
    <header className="w-full">
        <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
            <div className="absolute left-0 top-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
            <Image
                src="/Trello_logo.svg.png"
                alt="Trello Logo"
                width={300}
                height={100}
                className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
            />
            <div className="flex items-center space-x-5 flex-1"> 
                {/* Search Box */}
                <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder='Search' 
                      className="felx-1 outline-none p-2" 
                      onChange={e => setSearchString(e.target.value)}
                    />
                    <button type="submit" hidden>
                        Search
                    </button>
                </form>
                {/* Avatar */}
                <Avatar name="Mark Chen" size="50" round={true} color="#0055d1"/>
            </div>
        </div>
        
        <div className="flex items-center justify-center px-5 md-py-5 my-5">
            <p className="flex items-center text-sm font-light p-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
                <UserCircleIcon className="inline-block h-10 w-10 text-[#0055d1] mr-1" color="#0055d1"/>
                GPT is summarising your task for the day...
            </p>
        </div>
    </header>
  )
}

export default Header