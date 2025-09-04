// "use client";
// import HomePostCard from "../../Components/Moviecard/HomePostCard";
// import useMovieData from "@/Custom-hook/useMovieData";

// function Home() {
//   const { data: movies, page, setPage, loading, totalPages } = useMovieData(24); // 6 movies per page

//   const Loader = ({ text = "Loading..." }) => (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="flex flex-col items-center gap-3">
//         <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
//         <p className="text-lg text-gray-600 font-medium">{text}</p>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* Movie Cards */}
//       <div className="w-full flex flex-wrap card ">
//         {!loading &&
//           movies.length !== 0 &&
//           movies.map((movie) => (
//             <div key={movie.$id} className="lala m-3 rounded-md">
//               <HomePostCard item={movie} />
//             </div>
//           ))}
//       </div>

//       {loading && <Loader />}

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2 my-6">
//         {/* Show first 3 pages */}
//         {[...Array(Math.min(totalPages, 3)).keys()].map((num) => (
//           <button
//             key={num}
//             onClick={() => setPage(num)}
//             className={`px-4 py-2 rounded ${
//               page === num
//                 ? "bg-pink-500 text-white"
//                 : "bg-gray-800 text-gray-200 hover:bg-gray-600"
//             }`}
//           >
//             {num + 1}
//           </button>
//         ))}

//         {/* Last Page */}
//         {totalPages > 3 && (
//           <button
//             onClick={() => setPage(totalPages - 1)}
//             className={`px-4 py-2 rounded ${
//               page === totalPages - 1
//                 ? "bg-pink-500 text-white"
//                 : "bg-gray-800 text-gray-200 hover:bg-gray-600"
//             }`}
//           >
//             Last
//           </button>
//         )}
//       </div>
//     </>
//   );
// }

// export default Home;

// app/category/bollywood/page.jsx
import { databases } from "../../Appwrite/Auth";
import conf from "../../conf/conf";
import { Query } from "appwrite";
import HomePostCard from "../../Components/Moviecard/HomePostCard";
import Banner from "../../Components/Adsterra/Banner/Banner_760x60/Banner";
import Link from "next/link";

// ✅ Server Component (no "use client")
export default async function BollywoodMovies() {
  let data = [];

  try {
    const res = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [Query.orderDesc("$createdAt")]
    );

    data = res.documents;
  } catch (error) {
    console.error("Appwrite fetch error:", error);
  }

  return (
    <>
      {/* Banner */}
      <div className="w-full flex justify-center items-center">
        <Banner />
      </div>

      {/* Movie Cards */}
      <div className="w-full flex flex-wrap card">
        {data && data.length !== 0 ? (
          data.map((movie) => (
            <Link
              href={`/movie/${movie.title}`}
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
    </>
  );
}
