import Home from "@/Pages/Home/Home";
import Head from "next/head";
export const metadata = {
  title: "SeeHDmovie - Movies Download",
  description: "Download the latest Hollywood, Bollywood, and South Indian movies in HD quality. Fast and free movie download, no registration required. only on seehdmovie",
   keywords:"HD movie, download, seehd, latest Movies, seehdmovies",
    canonical:"https://seehdmovie.xyz/"
};

export default function Page() {
  return (
    <>
      <Head>
        <title>SeeHDmovie - Movies Download</title>
        <meta
          name="description"
          content="Download the latest Hollywood, Bollywood, and South Indian movies in HD quality. Fast and free movie download, no registration required. Only on SeeHDmovie."
        />
        <meta
          name="keywords"
          content="HD movie, download, seehd, latest Movies, seehdmovies"
        />
        <link rel="canonical" href="https://seehdmovie.xyz/" />
      </Head>
    <h1 className="font-bold font-sans text-2xl sm:text-3xl text-center text-red-600 my-4">
        Free HD Movies Download | Bollywood, Hollywood & Dual Audio Movies - SeeHDMovie
      </h1>
     <Home />
    </>
  );
}
