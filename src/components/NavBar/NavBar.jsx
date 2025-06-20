import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaGlobe } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => setLanguage(prev => (prev === 'EN' ? 'BN' : 'EN'));

  return (
    <nav className="bg-[#0d1117] text-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide">
          <span className="text-cyan-400">▣</span> SakibHossain
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="/" className="flex items-center gap-1 hover:text-cyan-400">
            <FaHome /> Home
          </a>
          <a href="#about" className="flex items-center gap-1 hover:text-cyan-400">
            <FaUser /> About
          </a>
          <a href="/project" className="flex items-center gap-1 hover:text-cyan-400">
            <FaBriefcase /> Project
          </a>
          <a href="#contact" className="flex items-center gap-1 hover:text-cyan-400">
            <FaEnvelope /> Contact
          </a>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 border border-cyan-400 px-2 py-1 rounded hover:bg-cyan-400 hover:text-black"
          >
            <FaGlobe /> {language}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 text-sm font-medium">
          <a href="#home" onClick={toggleMenu} className="flex items-center gap-1 hover:text-cyan-400">
            <FaHome /> Home
          </a>
          <a href="#about" onClick={toggleMenu} className="flex items-center gap-1 hover:text-cyan-400">
            <FaUser /> About
          </a>
          <a href="#project" onClick={toggleMenu} className="flex items-center gap-1 hover:text-cyan-400">
            <FaBriefcase /> Project
          </a>
          <a href="#contact" onClick={toggleMenu} className="flex items-center gap-1 hover:text-cyan-400">
            <FaEnvelope /> Contact
          </a>
          <button
            onClick={() => {
              toggleLanguage();
              toggleMenu();
            }}
            className="flex items-center gap-1 border border-cyan-400 px-3 py-1 rounded hover:bg-cyan-400 hover:text-black"
          >
            <FaGlobe /> {language}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
