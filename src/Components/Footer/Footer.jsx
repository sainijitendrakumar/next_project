// src/components/Footer.jsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900  w-full text-gray-300 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="/aboutus" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="hover:text-white">
                Terms and Conditions
              </a>
            </li>
            {/* <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li> */}
            <li>
              <a href="/disclaimer" className="hover:text-white">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="/dmca-policy" className="hover:text-white">
                DMCA Policy
              </a>
            </li>
            {/* <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        seehdmovie © 2025
      </div>
      {/* Disclaimer */}
      <div className="sm:col-span-2 text-center">
        <p className="text-sm leading-relaxed">
          <strong>Disclaimer:</strong> This site does not store any files on its
          server. All contents are provided by non-affiliated third parties.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
