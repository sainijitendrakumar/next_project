import Home from "@/Pages/Home/Home";
import Head from "next/head";
export const metadata = {
  title: "Mkvcinemas - Movies Download",
  description: "Download the latest Hollywood, Bollywood, and South Indian movies in HD quality. Fast and free movie download - Mkvcinemas",
   keywords:"HD movie, download, seehd, latest Movies, Mkvcinemas",
    canonical:"https://seehdmovie.xyz/"
};

export default function Page() {
  return (
    <>
      <Head>
        <title>Mkvcinemas - Movies Download</title>
        <meta
          name="description"
          content="Download the latest Hollywood, Bollywood, and South Indian movies in HD quality. Fast and free movie download, no registration required. Only on SeeHDmovie."
        />
        <meta
          name="keywords"
          content="HD movie, download, seehd, latest Movies, Mkvcinemas"
        />
        <link rel="canonical" href="https://seehdmovie.xyz/" />
      </Head>
    <h1 className="font-bold font-sans text-2xl sm:text-3xl text-center text-red-600 my-4">
      Mkvcinemas | Bollywood, Hollywood & Dual Audio Movies - mkvcinemas
      </h1>
     <Home />
    </>
  );
}
