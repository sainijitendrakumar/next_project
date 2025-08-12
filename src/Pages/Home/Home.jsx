"use client"; // must be the very first line
import React, { useState, useEffect } from "react";
import { databases } from "../../Appwrite/Auth";
import conf from "../../conf/conf";
import HomePostCard from "../../Components/Moviecard/HomePostCard";
import { Query } from "appwrite";
import { useRouter } from "next/navigation";
// import './style.css'

function Home() {
  const navigate = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [Query.orderDesc("$createdAt")]
    );

    promise.then(
      function (res) {
        setData(res.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleCardClick = (movie) => {
    navigate.push(`/movie/${movie.title}`);
  };

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
      <h1 className="font-bold text-2xl sm:text-4xl text-center text-red-600 my-2">
        Watch & Download Latest HD Movies Free - SeeHDMovie
      </h1>
      <div className="w-full flex flex-wrap card ">
        {data &&
          data.length !== 0 &&
          data.map((movie) => (
            <div
              key={movie.$id}
              className="lala m-3 rounded-md"
              onClick={() => handleCardClick(movie)}
            >
              <HomePostCard item={movie} />
            </div>
          ))}
      </div>
      {data.length === 0 && <Loader />}
    </>
  );
}

export default Home;
