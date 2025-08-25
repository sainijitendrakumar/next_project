import Home from "@/Pages/Home/Home";
export const metadata = {
  title: "SeeHDmovie: Movie Download",
  description: "Download the latest Hollywood, Bollywood, and South Indian movies in HD quality. Fast and free movie download, no registration required. only on seehdmovie",
   keywords:"HD movie. download, latest Movies, seehdmovie",
    canonical:"https://seehdmovie.xyz/"
};

export default function Page() {
  return (
    <>
    <h1 className="font-bold font-sans text-2xl sm:text-3xl text-center text-red-600 my-4">
        Free HD Movie Download | Bollywood, Hollywood & Dual Audio Movies - SeeHDMovie
      </h1>
     <Home />
    </>
  );
}
