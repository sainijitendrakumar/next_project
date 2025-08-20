"use client";
import HomePostCard from "../../Components/Moviecard/HomePostCard";

import moviedata from "@/Custom-hook/useMovieData";

function Home() {
  const movies = moviedata();
  console.log(movies);

  const Loader = ({ text = "Loading..." }) => {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-gray-600 font-medium">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full flex flex-wrap card ">
        {movies &&
          movies.length !== 0 &&
          movies.map((movie) => (
            <div key={movie.$id} className="lala m-3 rounded-md">
              <HomePostCard item={movie} />
            </div>
          ))}
      </div>
      {movies.length === 0 && <Loader />}
    </>
  );
}

export default Home;
