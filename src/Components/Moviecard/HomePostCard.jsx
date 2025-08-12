import React from "react";

function HomePostCard({ item }) {
  return (
    <div className="relative cursor-pointer rounded-lg shadow hover:shadow-lg transition overflow-hidden w-fit">
      {/* Image Wrapper */}
      <div className="relative">
        <img
          src={item.img_url}
          alt={item.title}
          width="166px"
          height="220px"
          title={item.title}
          loading="eager"
          className="rounded-lg w-[150px] h-[205px] sm:w-[166px] sm:h-[220px] object-cover"
        />

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent rounded-b-lg" />
      </div>
      <div className="absolute top-1 right-2 bg-red-500 px-2 rounded-xl flex justify-center items-center">
        <p
          className="text-center text-[11px] font-semibold  tracking-tight text-white "
          style={{ lineHeight: "1.2" }}
        >
          {item.release_date}
        </p>
      </div>
      {/* Title */}
      <div className="absolute bottom-3 left-4 right-4 flex justify-center items-center">
        <h2
          className="text-center font-semibold tracking-tight text-white text-sm"
          style={{ lineHeight: "1.2" }}
        >
          {item.title}
        </h2>
      </div>
    </div>
  );
}

export default HomePostCard;
