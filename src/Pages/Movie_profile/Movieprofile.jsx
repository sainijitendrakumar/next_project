"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { databases } from "../../Appwrite/Auth";
import conf from "../../conf/conf";
import { Query } from "appwrite";
import { useParams, useSearchParams } from "next/navigation";
// import Banner from "../../Components/Adsterra/Banner/Banner_760x60/Banner";

function dataprofile() {
  const params = useParams();
  // const location = useRouter();
  // const data = location.state;
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal("title", decodeURIComponent(params.title)), // match title exactly
        Query.orderDesc("$createdAt"), // sort by created date
      ]
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
  console.log(data);

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
      <div className="">
        {data &&
          data.length !== 0 &&
          data.map((movie) => (
            <div className="flex flex-col items-center" key={movie.title}>
              <h1 className="text-2xl sm:text-3xl font-bold py-2 text-center ">
                Download | {movie.title} | Full data 720p
              </h1>

              <p className="sm:text-xl font-semibold text-center py-2">
                {movie.discription}
              </p>
              <img
                src={movie.img_url}
                alt={movie.title}
                className="flex "
                width="500px"
                height="auto"
                style={{
                  height: "auto",
                  borderRadius: "8px",
                  margin: "5px",
                }}
              />
              <h2 className="font-bold text-2xl sm:text-4xl text-gray-800 text-center">
                Download | {movie.title} | {movie.language} | Full data 720p
              </h2>
              <p className="font-bold text-xl sm:text-3xl my-3 text-center">
                Click on the Below Download Button to Download file
              </p>
              <h3 className="text-red-700 text:xl sm:text-2xl font-bold my-2 text-center">
                {" "}
                : DOWNLOADS LINKS :{" "}
              </h3>
              <h4 className="text-red-700 text-xl font-bold my-2">
                -: {movie.title} :-
              </h4>
              <p className="font-[12px] text-[#aaa]  ">
                <span className="bg-[#FF6D00] text-white font-bold text-[15px] sm:text-[20px] px-[38px] py-[19px] rounded-[7px] inline-block text-center m-[4px_2px]">
                  G-Drive [GDToT] Links:
                </span>
              </p>
              <div className="sm:w-2/3 my-2.5 p-1 text-white bg-[#7d3741] border text-center border-red-500 rounded-3xl">
                <a
                  className="text-[13px] sm:text-xl p-2 font-semibold"
                  href={movie.movie_drive_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie.title} | {movie.language} | [720p Link]
                </a>
              </div>
              <p className="font-[12px] text-[#aaa]  ">
                <span className="bg-[#FF6D00] text-white font-bold text-[15px] sm:text-[20px] px-[38px] py-[19px] rounded-[7px] inline-block text-center m-[4px_2px]">
                  Telegram Links:
                </span>
              </p>
              <div className="sm:w-2/3 my-2.5 p-1 text-white bg-[#7d3741] border text-center border-red-500 rounded-3xl">
                <a
                  className=" text-[13px] sm:text-xl p-2 font-semibold"
                  href={movie.telegram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie.title} | {movie.language} | [720p Link]
                </a>
              </div>
            </div>
          ))}
      </div>
      {data.length === 0 && <Loader />}
    </>
  );
}

export default dataprofile;
