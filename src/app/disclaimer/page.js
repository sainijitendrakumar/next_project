import React from "react";

function Disclaimer() {
  return (
    <div className="bg-[#1e1e1e] text-white p-4 md:p-6 rounded border border-gray-700 max-w-4xl mx-auto mt-5">
      {/* Header */}
      <div className="bg-[#2e2e2e] px-4 py-2 rounded-t">
        <h2 className="text-lg md:text-xl font-semibold">Disclaimer</h2>
      </div>

      {/* Content */}
      <div className="p-4 text-sm md:text-base leading-relaxed">
        <h3 className="text-3xl font-semibold mb-2">Welcome to seeHDmovie!</h3>{" "}
        <p>
          All content shared on seehdmovie.xyz is freely available across the
          internet and has been shared by external sources. We do not upload,
          host, or store any copyrighted material on our servers. Our platform
          functions purely as an index of content that is already publicly
          accessible online.
        </p>
        <h3 className="text-3xl font-semibold mb-2">
          {" "}
          Important Notice Regarding Copyrighted Content
        </h3>{" "}
        <ul className="text-white list-disc ml-6">
          <li>
            seehdmovie.xyz does not host any copyrighted files (videos, images,
            or downloads).
          </li>
          <li>
            All links and references are submitted or sourced from third-party
            platforms.
          </li>
          <li>
            If any content violates your copyrights, you may request removal by
            following the steps below.
          </li>
        </ul>
        <h3 className="text-3xl font-semibold mb-2">
          How to Request Removal of Copyrighted Material
        </h3>{" "}
        <p>
          We take copyright concerns seriously and strive to resolve such issues
          as quickly as possible—typically within 4 business days of a valid
          request.
        </p>
        <p>
          If you're a copyright owner or an authorized agent, you can request
          the removal of specific content. Your DMCA notice must meet the
          following conditions:
        </p>
        <ol className="text-white list-decimal list-inside mt-1">
          <li>
            You are the copyright holder or a legally authorized representative.
          </li>
          <li>You provide the exact URL(s) of the content to be removed.</li>
          <li>
            You include the full name or title of the copyrighted material.
          </li>
          <li>
            {" "}
            Your request is submitted via a verifiable email address (e.g.,
            you@yourcompany.com).
          </li>
          <li>Your message is written in a clear and professional tone.</li>
        </ol>
        <p>Please use our official Contact Us page to submit your request.</p>
        <h3 className="text-3xl font-semibold mb-2">Response Time</h3>{" "}
        <p>
          Upon receiving a valid and complete request, we will review and
          process the removal—typically within 4 business days. We appreciate
          your cooperation and understanding.
        </p>
        <h3 className="text-3xl font-semibold mb-2"> Disclaimer</h3>{" "}
        <p>
          All user-submitted comments or content on this website contain general
          information and do not include copyrighted files. However, we are
          committed to respecting intellectual property rights. If you identify
          any violations, we are ready to assist in resolving the matter.
        </p>
        <div className="text-center mt-4">
          <span className="text-red-500 font-bold text-lg">
            [ How To Download ]
          </span>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
