"use client"; // Required because we're using useState/useEffect and router.push

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation hook
import { Query } from "appwrite";
import conf from "../../conf/conf";
import { databases } from "../../Appwrite/Auth";

const MovieSearch = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      const res = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.orderDesc("$createdAt"), Query.limit(100)]
      );

      const filtered = res.documents.filter((movie) =>
        movie.title.toLowerCase().includes(value)
      );
      setResults(filtered);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (movie) => {
    // Navigate to dynamic route in Next.js
    router.push(`/movie/${encodeURIComponent(movie.title)}`);
    setQuery("");
    setResults([]);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mb-6">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a movie..."
        className="w-full px-4 py-2 border bg-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {loading && (
        <div className="absolute top-full left-0 w-full bg-white p-3 border rounded-lg shadow-md">
          <p className="text-gray-500">Searching...</p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <ul className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg z-10 max-h-60 overflow-y-auto">
          {results.map((movie) => (
            <li
              key={movie.$id}
              onClick={() => handleSelect(movie)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-white cursor-pointer"
            >
              {movie.image && (
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-10 h-14 object-cover rounded"
                />
              )}
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearch;
