import React from "react";

function Terms() {
  return (
    <div className="bg-[#1e1e1e] text-white p-4 md:p-6 rounded border border-gray-700 max-w-4xl mx-auto mt-5">
      {/* Header */}
      <div className="bg-[#2e2e2e] px-4 py-2 rounded-t">
        <h2 className="text-lg md:text-xl font-semibold">
          Terms and Conditions
        </h2>
      </div>

      {/* Content */}
      <div className="p-4 text-sm md:text-base leading-relaxed">
        <div className="">
          <h3 className="mt-4 font-bold text-3xl">Terms and Conditions</h3>{" "}
          <p className="mt-3">
            Welcome to seeHDmovie. Before using our website (the “Service”),
            please take a moment to read these Terms and Conditions (“Terms”).
          </p>
          <p className="mt-3">
            By choosing to access or use seeHDmovie, you acknowledge and agree
            to be bound by these Terms. These Terms govern your use of our
            Service and apply to all visitors, users, and anyone who interacts
            with the site.
          </p>
          <p className="mt-3">
            If you do not accept or agree with any part of these Terms, we
            kindly ask that you refrain from using the Service.
          </p>
        </div>
        <div>
          <h3 className="mt-4 font-bold text-2xl">Links To Other Web Sites</h3>{" "}
          <p className="mt-3">
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by seeHDmovie.
          </p>
          <p className="mt-3">
            seeHDmovie has no control over, and bears no responsibility for, the
            content, privacy policies, or practices of any third-party websites
            or services. By using our platform, you acknowledge and agree that
            seeHDmovie shall not be held liable, directly or indirectly, for any
            loss or damage caused—or claimed to be caused—by your use of, or
            reliance on, any content, products, or services made available
            through such external sites.
          </p>
        </div>
        <h3 className="mt-4 font-bold text-2xl">
          Governing Law and Legal Provisions
        </h3>{" "}
        <p className="mt-3">
          These Terms and Conditions shall be governed by and interpreted in
          accordance with the laws of Delhi, India, without giving effect to any
          principles of conflicts of law.
        </p>
        <p className="mt-3">
          By using seeHDmovie, you agree that any legal matters or disputes
          arising from or related to the use of our Service shall be exclusively
          subject to the jurisdiction of the courts located in Delhi, India.
        </p>
        <p className="mt-3">
          Failure on our part to enforce any right or provision under these
          Terms will not constitute a waiver of such rights. If any provision of
          these Terms is found by a court of competent jurisdiction to be
          invalid, unlawful, or unenforceable, the remaining provisions shall
          remain fully effective and enforceable.
        </p>
        <p className="mt-3">
          These Terms represent the complete and final agreement between you and
          seeHDmovie concerning the use of our website and services. They
          override and replace any previous understandings, oral or written,
          related to the subject matter.
        </p>
        <h3 className="mt-4 font-bold text-2xl">Changes</h3>{" "}
        <p className="mt-3">
          We reserve the right to update, modify, or replace these Terms and
          Conditions at any time, at our sole discretion. Any changes made will
          take effect immediately upon posting, unless otherwise specified. In
          the case of significant or material changes, we will make reasonable
          efforts to provide advance notice—typically at least 30 days—before
          the updated terms become effective. What qualifies as a “material
          change” will be determined solely by seeHDmovie.
        </p>
        <p className="mt-3">
          By continuing to access or use our website and services after any
          revisions are implemented, you agree to be legally bound by the
          updated Terms. If you do not accept the revised Terms, we advise you
          to discontinue use of the Service immediately.
        </p>
        <p className="mt-3">
          We encourage users to review this page periodically to stay informed
          about any changes to our Terms and Conditions.
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

export default Terms;
