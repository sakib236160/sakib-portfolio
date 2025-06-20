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
    <>
    <section
      id="contact"
      className="min-h-screen bg-[#0A0D18] text-[#e0e0e0] p-10 flex flex-col font-sans ml-16 mr-16"
    >
      {/* Contacts Header */}
      <div className="flex items-center gap-3 mb-10 " data-aos="fade-right">
        <FaAddressBook className="text-cyan-400 text-2xl" />
        <h1 className="text-3xl font-bold text-[#e0e0e0] whitespace-nowrap">
          Contacts
        </h1>
        <div className="w-1/4 h-px bg-cyan-400 ml-3 mr-6"></div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-12 p-5 md:p-0">
        {/* Left message */}
        <div className="md:w-1/2 flex items-start">
          <FaPhoneAlt className="text-red-500 text-2xl mr-3 mt-1" />
          <p className="text-lg leading-relaxed text-gray-300">
            Let's build something beautiful together! I'm interested in freelance
            opportunities. However, if you have other requests or questions, don't
            hesitate to contact me.
          </p>
        </div>

        {/* Right contact box */}
        <div className="md:w-1/3 p-6 border border-[#3a3a4e] rounded-lg bg-[#0A0D18] shadow-lg">
          <h3 className="text-xl font-semibold text-[#e0e0e0] mb-5">
            Message me here
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaEnvelope className="text-cyan-400 text-xl mr-3" />
              <a
                href="mailto:hossainsakib965@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                hossainsakib965@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="text-cyan-400 text-xl mr-3" />
              <a
                href="https://github.com/arswe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                https://github.com/arswe
              </a>
            </li>
            <li className="flex items-center">
              <FaLinkedin className="text-cyan-400 text-xl mr-3" />
              <a
                href="https://linkedin.com/in/arswe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                https://linkedin.com/in/arswe
              </a>
            </li>
          </ul>
        </div>
      </div>
       <Box></Box>
    </section>
    </>
  );
};

export default Contact;

