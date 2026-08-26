// app/category/south-indian/page.jsx
import { databases } from "../../../Appwrite/Auth";
import conf from "../../../conf/conf";
import { Query } from "appwrite";
import HomePostCard from "../../../Components/Moviecard/HomePostCard";
import Banner760 from "../../Components/Adsterra/Banner/Banner_760x60/Banner";
import Banner468 from "../../Components/Adsterra/Banner/Banner_468x60/Banner";
import Banner320 from "../../Components/Adsterra/Banner/Banner_320x50/Banner";
import Link from "next/link";

// ✅ Server Component (no "use client")
export default async function SouthIndianMovies() {
  let data = [];

  try {
    const res = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal("movie-type", "south-indian"), // Filter only South Indian movies
        Query.orderDesc("$createdAt"),
      ],
    );

    data = res.documents;
  } catch (error) {
    console.error("Appwrite fetch error:", error);
  }

  return (
    <div>
      {/* Banner */}
      <div className="w-full flex justify-center items-center">
        {/* Mobile */}
        <div className="block min-[576px]:hidden">
          <Banner320 />
        </div>

        {/* Tablet */}
        <div className="hidden min-[576px]:block min-[992px]:hidden">
          <Banner468 />
        </div>

        {/* Desktop */}
        <div className="hidden min-[992px]:block">
          <Banner760 />
        </div>
      </div>

      {/* Movie Cards */}
      <div className="w-full flex flex-wrap card">
        {data && data.length !== 0 ? (
          data.map((movie) => (
            <Link
              href={`/movie/${movie.slug}`}
              key={movie.$id}
              className="lala m-3 rounded-md"
            >
              <HomePostCard item={movie} />
            </Link>
          ))
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg text-gray-600 font-medium">Loading...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
