import Head from "next/head";
import React from "react";

export const metadata = {
  title: "about us - SeeHDMovie",
  description: "Learn more about seeHDmovie – your go-to platform for the latest Bollywood, Hollywood, South Indian, and Hindi Dubbed movies in HD. Fast, free, and updated daily for endless entertainment.",
        
  keywords:"HD movie download, Bollywood movies, Hollywood movies, Dual audio movies, 720p movies, 1080p movies, full movie download, free movie download, Hindi dubbed movies, South Indian movies, movie download site, latest movies 2025, seehdmovie, seehdmovie.xyz",
  canonical:"https://seehdmovie.xyz/aboutus"
}

const AboutSection = async () => {
  return (
    <>
    <div className="bg-[#1e1e1e] text-white p-4 md:p-6 rounded border border-gray-700 max-w-4xl mx-auto mt-5">
      {/* Header */}
      <div className="bg-[#2e2e2e] px-4 py-2 rounded-t">
        <h1 className="text-lg md:text-xl font-semibold">About Us</h1>
      </div>

      {/* Content */}
      <div className="p-4 text-sm md:text-base leading-relaxed">
        <h3 className="text-3xl font-semibold mb-2">Welcome to seeHDmovie!</h3>{" "}
        <p>
          seeHDmovie serves as a search index for movies of all available
          qualities. We do not host any files on our servers; only external
          links are indexed for your convenience. We appreciate your continued
          visits — feel free to share our website with your friends, classmates,
          or colleagues!
        </p>
        <div className="text-center mt-4">
          <span className="text-red-500 font-bold text-lg">
            [ How To Download ]
          </span>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default AboutSection;
