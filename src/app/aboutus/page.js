import React from "react";

const AboutSection = async () => {
  return (
    <div className="bg-[#1e1e1e] text-white p-4 md:p-6 rounded border border-gray-700 max-w-4xl mx-auto mt-5">
      {/* Header */}
      <div className="bg-[#2e2e2e] px-4 py-2 rounded-t">
        <h2 className="text-lg md:text-xl font-semibold">About Us</h2>
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
  );
};

export default AboutSection;
