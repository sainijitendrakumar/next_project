import React from "react";

function DMCA() {
  return (
    <div className="bg-[#1e1e1e] text-white p-4 md:p-6 rounded border border-gray-700 max-w-4xl mx-auto mt-5">
      {/* Header */}
      <div className="bg-[#2e2e2e] px-4 py-2 rounded-t">
        <h2 className="text-lg md:text-xl font-semibold">
          DMCA & Copyright Policy
        </h2>
      </div>

      {/* Content */}
      <div className="p-4 text-sm md:text-base leading-relaxed">
        <h3 className="text-3xl font-semibold mb-2">DMCA & Copyright Policy</h3>{" "}
        <p className="mt-2">
          seeHDmovie is a content aggregator and does not host or upload any
          files on its servers. All media content accessible through this
          website is provided and hosted by third-party websites that are not
          affiliated with us in any way. We simply index links available
          publicly on the internet—similar to how search engines like Google
          operate.
        </p>
        <p className="mt-2">
          We do not store or stream any copyrighted material on seeHDmovie. Our
          role is strictly limited to curating and indexing content links
          already present across the web. seeHDmovie holds no ownership or
          control over the content hosted on external websites.
        </p>
        <p className="mt-2">
          If you believe that any content on this site infringes your copyright,
          we urge you to directly contact the hosting website or file provider
          responsible for storing the material. Since seeHDmovie does not host
          any content, we cannot take action regarding the actual files.
        </p>
        <p className="mt-2">
          For copyright-related concerns, or if you require further assistance,
          you may reach out to us through our [Contact Page]. Kindly allow 3–5
          business days for a response.
        </p>
        <h3 className="text-3xl mt-3 font-semibold mb-2">Legal Disclaimer</h3>{" "}
        <p className="mt-2">
          seeHDmovie and all associated domains strictly provide link indexing
          services. We do not store, host, or upload any media files on our
          servers. All links on our platform point to content hosted by
          independent third-party providers.
        </p>
        <p className="mt-2">By accessing seeHDmovie, users acknowledge that:</p>
        <ul className="text-white list-disc ml-5">
          <li>
            We are not liable for content found on any externally linked
            websites.
          </li>
          <li>
            We are not involved in the uploading, downloading, or sharing of any
            files.
          </li>
          <li>
            All material presented is intended solely for informational and
            educational purposes.
          </li>
        </ul>
        <p className="mt-2">
          If you have concerns about content access, please consult the
          respective content host or file-sharing platform directly.
        </p>
        <p className="mt-2">
          <strong>Note:</strong> seeHDmovie operates in full compliance with the
          Digital Millennium Copyright Act (DMCA). We support content creators
          and respect intellectual property rights.
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

export default DMCA;
