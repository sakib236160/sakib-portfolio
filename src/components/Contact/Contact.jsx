import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaAddressBook,
} from "react-icons/fa";
import Box from "../Box/Box";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0A0D18] text-[#e0e0e0] p-6 md:p-10 flex flex-col font-sans mx-auto max-w-7xl"
    >
      {/* Contacts Header */}
      <div
        className="flex items-center gap-3 mb-10 justify-center md:justify-start"
        data-aos="fade-right"
      >
        <FaAddressBook className="text-cyan-400 text-2xl" />
        <h1 className="text-3xl font-bold text-[#e0e0e0] whitespace-nowrap">
          Contacts
        </h1>
        <div className="hidden md:block flex-1 h-px bg-cyan-400 ml-3 mr-6"></div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left message */}
        <div className="md:w-1/2 flex items-start text-center md:text-left flex-col md:flex-row md:items-start">
          <FaPhoneAlt className="text-red-500 text-2xl mr-0 md:mr-3 mb-3 md:mb-0" />
          <p className="text-lg leading-relaxed text-gray-300 max-w-md">
            Let's build something beautiful together! I'm interested in freelance
            opportunities. However, if you have other requests or questions, don't
            hesitate to contact me.
          </p>
        </div>

        {/* Right contact box */}
        <div className="md:w-1/3 w-full p-6 border border-[#3a3a4e] rounded-lg bg-[#0A0D18] shadow-lg">
          <h3 className="text-xl font-semibold text-[#e0e0e0] mb-5 text-center md:text-left">
            Message me here
          </h3>
          <ul className="space-y-4 text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-cyan-400 text-xl mr-3" />
              <a
                href="mailto:hossainsakib965@gmail.com"
                className="text-cyan-400 hover:underline break-all"
              >
                hossainsakib965@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaGithub className="text-cyan-400 text-xl mr-3" />
              <a
                href="https://github.com/sakib236160"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline break-all"
              >
                https://github.com/sakib236160
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaLinkedin className="text-cyan-400 text-xl mr-3" />
              <a
                href="https://www.linkedin.com/in/sakib-hossain-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline break-all"
              >
                https://www.linkedin.com/in/sakib-hossain-dev/
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Box />
    </section>
  );
};

export default Contact;
