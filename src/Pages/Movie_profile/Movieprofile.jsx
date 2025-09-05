// app/movie/[title]/page.jsx
import { databases } from "@/Appwrite/Auth";
import conf from "@/conf/conf";
import { Query } from "appwrite";

// ✅ Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { title } = await params; // ✅ must await here

  let movie = null;
  try {
    const res = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal("title", decodeURIComponent(title)),
        Query.orderDesc("$createdAt"),
      ]
    );
    movie = res.documents[0] || null;
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  if (!movie) {
    return {
      title: "Movie Not Found - SeeHDMovie",
      description:
        "Requested movie is not available. Explore more movies on SeeHDMovie.",
      keywords: "HD movies, free download, latest movies, SeeHDMovie",
      alternates: {
        canonical: `https://seehdmovie.xyz/movie/${encodeURIComponent(title)}`,
      },
    };
  }

  return {
    title: `Download ${movie.title} (${movie.language}) | Full HD 720p Free - SeeHDMovie`,
    description:
      movie.discription?.slice(0, 160) ||
      `Watch and download ${movie.title} in ${movie.language}. Full HD 720p available on SeeHDMovie.`,
    keywords:
      "HD movie download, Bollywood movies, Hollywood movies, Dual audio movies, 720p movies, 1080p movies, full movie download, free movie download, Hindi dubbed movies, South Indian movies, movie download site, latest movies 2025, seehdmovies, seehdmovie",
    alternates: {
      canonical: `https://seehdmovie.xyz/movie/${encodeURIComponent(
        movie.title
      )}`,
    },
  };
}

// ✅ Page Component
export default async function Dataprofile({ params }) {
  const { title } = await params; // ✅ must await here
  let data = [];

  try {
    const res = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal("title", decodeURIComponent(title)),
        Query.orderDesc("$createdAt"),
      ]
    );
    data = res.documents;
  } catch (error) {
    console.error("Error fetching movie:", error);
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-gray-600 font-medium">
            Movie not found...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {data.map((movie) => (
        <div className="flex flex-col items-center" key={movie.$id}>
          <h1 className="text-2xl sm:text-3xl font-bold py-2 text-center">
            Download | {movie.title} | Full movie 720p
          </h1>
          <p className="w-2/3 sm:text-xl font-semibold text-center py-2">
            {movie.discription}
          </p>
          <img
            src={movie.img_url}
            alt={movie.title}
            width="500"
            className="rounded-md my-3"
          />
        </div>
      ))}
    </div>
  );
}
