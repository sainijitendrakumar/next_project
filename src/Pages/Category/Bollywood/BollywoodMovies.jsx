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
