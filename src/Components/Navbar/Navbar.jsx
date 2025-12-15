import React from "react";
import MovieSearch from "../MovieSearch/MovieSearch";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#1E293B] font-sans w-full  rounded-t-md px-4 py-3 flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-indigo-400 text-xl sm:text-2xl font-bold">
            {/* Placeholder for logo */}
            {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.477 0 10h2a8 8 0 0116 0h2c0-5.523-4.477-10-10-10zM2 10c0 4.418 3.582 8 8 8a8 8 0 008-8h-2a6 6 0 11-12 0H2z" />
            </svg> */}
            {/* <p className="text-red-500">Mkvcinemas</p> */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-1/3 sm:w-1/6 sm:w1/6">
          <MovieSearch />
        </div>

        {/* Icons */}
        {/* <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div> */}
      </div>

      {/* Bottom Nav */}
      <div className="flex flex-wrap mt-4 space-x-5 sm:space-x-6 text-[#c5ebff] font-medium">
        <Link href="/">Home</Link>
        <a
          href="/category/bollywood-movies"
          rel="noopener noreferrer"
          className=" rounded-md cursor-pointer"
        >
          Bollywood Movies
        </a>

        <a
          href="/category/hollywood-movies"
          rel="noopener noreferrer"
          className=" rounded-md cursor-pointer"
        >
          Hollywood Movies
        </a>
        <a
          href="/category/south-indian-movies"
          rel="noopener noreferrer"
          className=" rounded-md cursor-pointer"
        >
          South Indian Dubbed
        </a>
        <a
          href="/category/animation-movies"
          rel="noopener noreferrer"
          className=" rounded-md cursor-pointer"
        >
          Animation movies
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
