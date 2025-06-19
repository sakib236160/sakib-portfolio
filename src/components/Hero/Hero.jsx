// import { FaFileAlt, FaAddressBook, FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa'; // Added social media icons

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 relative overflow-hidden">
//       {/* Background Gradient Dots */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 opacity-20 rounded-full filter blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 opacity-20 rounded-full filter blur-3xl animate-pulse" />

//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 py-12 px-4">
//         {/* Left Section */}
//         <div className="md:w-1/2 text-left md:pl-10 mb-10 md:mb-0 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             <span className="text-yellow-400 text-5xl mr-2 inline-block">👋</span>
//             Hi, I’m <span className="text-purple-400">Sakib Hossain</span>
//           </h1>
//           <p className="text-xl font-semibold text-cyan-400">
//             Fullstack Software Engineer (JavaScript / TypeScript)
//           </p>
//           <p className="text-lg text-gray-300 leading-relaxed">
//             🚀 I build responsive websites where design meets functionality. Clean UI, smooth UX, and smart backend logic are my strengths.
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4 flex-wrap">
//             <button className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-md hover:bg-cyan-500 hover:text-black transition duration-300 font-semibold">
//               <FaFileAlt /> RESUME
//             </button>
//             <button className="flex items-center gap-2 border border-purple-400 text-purple-400 px-6 py-3 rounded-md hover:bg-purple-500 hover:text-black transition duration-300 font-semibold">
//               <FaAddressBook /> CONTACT
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 flex flex-col items-center md:items-end relative md:pr-10">
//           <div className="relative">
//             <img
//               src="https://i.ibb.co/FLKmB0Hg/SAKIB-HOSSAIN.jpg" // Replace with your image path
//               alt="Sakib Hossain"
//               className="rounded-full shadow-lg w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover relative z-20 border-4 border-purple-600"
//             />
//             {/* Glow ring behind image */}
//             <div className="absolute inset-0 rounded-full border-4 border-purple-500 transform scale-110 z-10 animate-pulse opacity-30" />
//           </div>

//           {/* Horizontal line (Re-added) */}
//           <hr className="w-2/3 border-gray-600 my-6" />

//           {/* Social Media Icons */}
//           <div className="flex space-x-4"> {/* Removed mt-8 as hr provides spacing now */}
//             {/* LinkedIn */}
//             <a
//               href="#" // Replace with your LinkedIn profile URL
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-xl"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedinIn />
//             </a>
//             {/* GitHub (Assuming the cat-like icon is GitHub for a developer) */}
//             <a
//               href="#" // Replace with your GitHub profile URL
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors duration-300 text-xl"
//               aria-label="GitHub"
//             >
//               <FaGithub />
//             </a>
//             {/* Facebook */}
//             <a
//               href="#" // Replace with your Facebook profile URL
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-300 text-xl"
//               aria-label="Facebook"
//             >
//               <FaFacebookF />
//             </a>
//             {/* Instagram */}
//             <a
//               href="#" // Replace with your Instagram profile URL
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 text-xl"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaFileAlt,
  FaAddressBook,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 relative overflow-hidden">
      {/* Background Gradient Dots */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 opacity-20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 opacity-20 rounded-full filter blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 py-12 px-4">
        {/* Left Section */}
        <div
          className="md:w-1/2 text-left md:pl-10 mb-10 md:mb-0 space-y-6"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-yellow-400 text-5xl mr-2 inline-block">👋</span>
            Hi, I’m <span className="text-purple-400">Sakib Hossain</span>
          </h1>
          <p className="text-xl font-semibold text-cyan-400">
            Fullstack Software Engineer (JavaScript / TypeScript)
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            🚀 I build responsive websites where design meets functionality. Clean UI,
            smooth UX, and smart backend logic are my strengths.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-md hover:bg-cyan-500 hover:text-black transition duration-300 font-semibold">
              <FaFileAlt /> RESUME
            </button>
            <button className="flex items-center gap-2 border border-purple-400 text-purple-400 px-6 py-3 rounded-md hover:bg-purple-500 hover:text-black transition duration-300 font-semibold">
              <FaAddressBook /> CONTACT
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="md:w-1/2 flex flex-col items-center md:items-end relative md:pr-10"
          data-aos="fade-left"
        >
          <div className="relative">
            <img
              src="https://i.ibb.co/FLKmB0Hg/SAKIB-HOSSAIN.jpg"
              alt="Sakib Hossain"
              className="rounded-full shadow-lg w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover relative z-20 border-4 border-purple-600"
            />
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 transform scale-110 z-10 animate-pulse opacity-30" />
          </div>

          {/* Horizontal line */}
          <hr className="w-2/3 border-gray-600 my-6" />

          {/* Social Media Icons */}
          <div className="flex space-x-4" data-aos="zoom-in">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors duration-300 text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-300 text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
