'use client';

import React from 'react'
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Avatar from 'react-avatar';

function Header() {
  return (
    <header className="w-full">
        <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
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
                    <input type="text" placeholder='Search' className="felx-1 outline-none p-2" />
                    <button type="submit" hidden>
                        Search
                    </button>
                </form>
                {/* Avatar */}
                <Avatar name="Mark Chen" size="50" round={true} color="#0055d1"/>
            </div>
        </div>
    </header>
  )
}

export default Header