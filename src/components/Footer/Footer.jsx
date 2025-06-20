import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0A0D18] text-gray-400 py-8 px-4">
       <div className="w-full h-px bg-gray-400 mb-5"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Logo / Name */}
        <div className="text-white font-bold text-lg">
          <span className="text-cyan-400">▣</span> SakibHossain
        </div>

        {/* Middle: Navigation */}
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#project" className="hover:text-cyan-400">Project</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/mdsakib.hossain.562329" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaFacebookF />
          </a>
          <a href="https://github.com/sakib236160" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sakib-hossain-dev/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-6 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SakibHossain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
