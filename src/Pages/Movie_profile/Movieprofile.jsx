// app/movie/[title]/page.jsx
import { databases } from "@/Appwrite/Auth";
import conf from "@/conf/conf";
import { Query } from "appwrite";

export default async function Dataprofile({ params }) {
  const { slug } = await params; // ✅ params must be awaited
  let data = [];

  try {
    const res = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [Query.equal("slug", slug), Query.orderDesc("$createdAt")]
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
          <p className="text-lg text-gray-600 font-medium">Loading...</p>
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

          <h2 className="mt-3 font-bold text-2xl sm:text-3xl text-gray-800 text-center">
            Download | {movie.title} | {movie.language} | Full Movie 720p
          </h2>

          <p className="font-bold text-xl sm:text-3xl my-3 text-center">
            Click on the Below Download Button to Download file
          </p>

          <h3 className="text-red-700 text-xl sm:text-2xl font-bold my-2 text-center">
            : DOWNLOAD LINKS :
          </h3>

          {/* ✅ Drive Link */}
          {movie.movie_drive_url ? (
            <>
              <p className="font-[12px] text-[#aaa] my-4">
                <span className="bg-[#FF6D00] text-white font-bold text-[15px] sm:text-[20px] px-[38px] py-[19px] rounded-[7px]">
                  G-Drive [GDToT] Links:
                </span>
              </p>
              <p>
                Note:- if there is any problem in downloading then use any vpn
                and try again
              </p>
              <div className="sm:w-2/3 my-2.5 p-1 text-white bg-[#7d3741] border text-center border-red-500 rounded-3xl">
                <a
                  className="text-[13px] sm:text-xl p-2 font-semibold"
                  href={movie.movie_drive_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie.title} | {movie.language} | [720p Link]
                </a>
              </div>
            </>
          ) : (
            movie.web_url &&
            Array.isArray(movie.web_url) &&
            movie.web_url.length > 0 && (
              <>
                <p className="font-[12px] text-[#aaa] mt-3">
                  <span className="bg-[#FF6D00] text-white font-bold text-[15px] sm:text-[20px] px-[38px] py-[19px] rounded-[7px]">
                    Web Links:
                  </span>
                </p>
                <p className="mt-3">
                  Note:- if there is any problem in downloading then use any vpn
                  and try again
                </p>
                <div className="sm:w-full my-2.5 p-1 flex flex-col items-center">
                  {movie.web_url.map((link, index) => (
                    <div
                      key={index}
                      className="sm:w-2/3 my-2.5 p-1 text-white bg-[#7d3741] border text-center border-blue-500 rounded-3xl"
                    >
                      <a
                        className="text-[13px] sm:text-xl p-2 font-semibold"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {movie.title} {index + 1} | {movie.language} | [Link{" "}
                        {index + 1}]
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )
          )}

          {/* ✅ Telegram Link (always show) */}
          <p className="font-[12px] text-[#aaa] my-4">
            <span className="bg-[#FF6D00] text-white font-bold text-[15px] sm:text-[20px] px-[38px] py-[19px] rounded-[7px]">
              Telegram Links:
            </span>
          </p>
          <div className="sm:w-2/3 my-2.5 p-1 text-white bg-[#7d3741] border text-center border-red-500 rounded-3xl">
            <a
              className="text-[13px] sm:text-xl p-2 font-semibold"
              href="https://t.me/+bFS7JDcUoa81Y2I1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {movie.title} | {movie.language} | [720p Link]
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
