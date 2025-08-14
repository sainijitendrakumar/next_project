"use client";
import React, { useState, useEffect } from "react";
import { databases } from "../../../Appwrite/Auth";
import conf from "../../../conf/conf";
import HomePostCard from "../../../Components/Moviecard/HomePostCard";
import { Query } from "appwrite";
import { useRouter } from "next/navigation";
import Banner from "../../../Components/Adsterra/Banner/Banner_760x60/Banner";
import Head from "next/head";

function BollywoodMovies() {
  const navigate = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal("movie-type", "bollywood"), // Filter only Bollywood movies
        Query.orderDesc("$createdAt"),
      ]
    );

    promise.then(
      (res) => {
        setData(res.documents);
      },
      (error) => {
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
      {/* <Head>
        <title> Download Latest Bollywood HD Movies Free - SeeHDMovie </title>
        <meta
          name="description"
          content="Download the latest Bollywood movies in HD quality. Fast downloads, no registration required."
        />
        <meta
          name="keywords"
          content="HD movie download, Bollywood movies, Hollywood movies, Dual audio movies, 720p movies, 1080p movies, full movie download, free movie download, Hindi dubbed movies, South Indian movies, movie download site, latest movies 2025, seehdmovie, seehdmovie.xyz"
        />
        <link
          rel="canonical"
          href="https://seehdmovie.xyz/category/download_bollywood_movies"
        />
      </Head> */}
      <h1 className="font-bold text-2xl sm:text-4xl text-center text-red-600 my-2">
        Download Latest Bollywood HD Movies Free - SeeHDMovie
      </h1>
      <div className=" w-full flex justify-center items-center">
        <Banner />
      </div>
      <div className="w-full flex flex-wrap card">
        {data && data.length !== 0 ? (
          data.map((movie) => (
            <div
              key={movie.$id}
              className="lala m-3 rounded-md"
              onClick={() => handleCardClick(movie)}
            >
              <HomePostCard item={movie} />
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default BollywoodMovies;
