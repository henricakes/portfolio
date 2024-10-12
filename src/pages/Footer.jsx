import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import the icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-500 to-slate-800 rounded-lg">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
        <div className="flex items-center justify-between p-1 md:flex-col items-center gap-3">
          <span className="flex md:text-center text-2xl text-white font-semibold whitespace-nowrap">
            Henricakes
          </span>
          {/* Account Links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/janjown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white w-6 h-6 hover:text-gray-300 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/jownjown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white w-6 h-6 hover:text-gray-300 transition" />
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto" />
        <span className="flex flex-col text-sm text-gray-50 sm:text-center justify-center">
          © 2024
          <a
            href="Henricakes"
            className="hover:underline hover:text-cyan-400 transition"
          >
            Henricakes
          </a>
          &nbsp;
          <br />
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
