import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
        {/* Left side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">🍔 QuickBite</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} QuickBite. All rights reserved.
          </p>
        </div>
        <div className=" border-gray-700 mt-4 pt-4 pb-6 flex justify-center space-x-6 text-xl">
        <a
          href="https://github.com/amityadav2321"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amit-yadav23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:itsamityadav2307@gmail.com"
          className="hover:text-white"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

        {/* Right side links */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors text-sm"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors text-sm"
          >
            Contact
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
