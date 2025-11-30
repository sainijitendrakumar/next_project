import Movieprofile from "@/Pages/Movie_profile/Movieprofile";
import { databases } from "@/Appwrite/Auth";
import conf from "@/conf/conf";
import { Query } from "appwrite";

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIXED

  let movie = null;
  try {
    const res = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal("slug", slug),
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
      keywords:
        "HD movies, free download, latest movies, SeeHDMovie",
      alternates: {
        canonical: `https://seehdmovie.xyz/movie/${slug}`,
      },
    };
  }

  return {
    title: `Download ${movie.title} (${movie.language}) | Full HD 720p Free - Mkvcinemas`,
    description:
      movie.description?.slice(0, 160) ||
      `Watch and download ${movie.title} in ${movie.language}. Full HD 720p available on Mkvcinemas.`,
    keywords:
      "HD movie download, Bollywood movies, Hollywood movies, Dual audio movies, 720p movies, 1080p movies, full movie download, free movie download, Hindi dubbed movies, South Indian movies, movie download site, latest movies 2025, Mkvcinemas",
    alternates: {
      canonical: `https://seehdmovie.xyz/movie/${slug}`,
    },
  };
}

export default Movieprofile