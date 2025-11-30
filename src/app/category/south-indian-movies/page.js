import Head from "next/head";
import South from "../../../Pages/Category/SouthIndian/SouthIndian"
export const metadata = {
    title: "Download Latest South Indain HD Movies Free - Mkvcinemas",
  description: "Free HD download of South Indian movies—enjoy the latest Tamil, Telugu, Malayalam & Kannada films in dual audio on Mkvcinemas.",
        
  keywords:"HD movie download, Bollywood movies, Hollywood movies, Dual audio movies, 720p movies, 1080p movies, full movie download, free movie download, Hindi dubbed movies, South Indian movies, movie download site, latest movies 2025, Mkvcinemass, Mkvcinemas",
  canonical:"https://seehdmovie.xyz/category/south-indian-movies"
}


export default function Page() {
  return (
    <>
    <Head>
      <link rel="canonical" href="https://Mkvcinemas.xyz/category/south-indian-movies" />
    </Head>
    <h1 className="font-bold font-sans text-2xl sm:text-3xl text-center text-red-600 my-4">
      Latest South Indian Free HD Movie Download | Dual Audio Movies - Mkvcinemas
      </h1>
      <South />
    </>
  );
}