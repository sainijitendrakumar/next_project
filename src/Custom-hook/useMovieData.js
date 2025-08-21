"use client";
import { useState, useEffect } from "react";
import { databases } from "../Appwrite/Auth";
import conf from "../conf/conf";
import { Query } from "appwrite";

const useMovieData = (limit = 10) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          [
            Query.limit(limit),
            Query.offset(page * limit),
            Query.orderDesc("$createdAt")
          ]
        );

        setData(res.documents);
        setHasMore(res.total > (page + 1) * limit);
        setTotalPages(Math.ceil(res.total / limit)); // 👈 calculate total pages
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  return { data, page, setPage, loading, hasMore, totalPages };
};

export default useMovieData;
