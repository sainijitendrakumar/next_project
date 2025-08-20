"use client"; // must be the very first line
import { useState, useEffect } from "react";
import { databases } from "../Appwrite/Auth";
import conf from "../conf/conf";
import { Query } from "appwrite";

const useMovieData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [Query.orderDesc("$createdAt")]
    );

    promise.then(
      (res) => setData(res.documents),
      (error) => console.log(error)
    );
  }, []);

  return data;
};

export default useMovieData;
