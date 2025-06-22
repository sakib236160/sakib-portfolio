import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload, FaUserCircle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0A0D18] text-white py-20 px-6 md:px-20 min-h-screen flex items-center justify-center"
      data-aos="fade-up"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Right Image Section */}
        <div
          className="flex justify-center md:justify-end w-full md:w-[450px] h-[400px] md:h-[500px] order-1 md:order-2 mx-auto"
          data-aos="zoom-in"
        >
          <img
            src="https://i.ibb.co/nqbDnR6R/Screenshot-12.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-cyan-500"
          />
        </div>

        {/* Left Text Section */}
        <div
          className="order-2 md:order-1 px-4 md:px-0
            flex flex-col items-center md:items-start
            text-center md:text-left
            mx-auto md:mx-0 max-w-full"
        >
          <p
            className="flex items-center justify-center md:justify-start text-white uppercase font-semibold tracking-wider mb-3 w-full max-w-md break-words"
            data-aos="fade-down"
          >
            <FaUserCircle className="mr-3 text-cyan-400 text-xl flex-shrink-0" />
            About Me
            <span className="flex-grow border-b border-cyan-400 ml-4"></span>
          </p>

          <h2
            className="text-5xl font-bold mb-4 w-full max-w-md break-words"
            data-aos="fade-right"
          >
            Who am I?
          </h2>

          <h3
            className="text-2xl font-semibold text-cyan-400 mb-8 h-10 w-full max-w-md break-words"
            data-aos="fade-left"
          >
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "React Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h3>

          <p
            className="text-gray-300 leading-relaxed text-lg mb-10 max-w-md break-words"
            data-aos="fade-up"
          >
            I am Sakib Hossain, a passionate and dedicated web developer with strong
            expertise in the MERN stack. I have experience in building scalable and
            efficient web applications, focusing on both front-end and back-end
            development. I am a proactive team player with excellent communication
            skills and always strive to deliver high-quality work within deadlines.
          </p>

          <h4
            className="text-white font-semibold mb-6 border-b border-gray-700 pb-3 inline-block w-full max-w-md"
            data-aos="zoom-in"
          >
            Personal Information
          </h4>

          <div
            className="overflow-x-auto w-full max-w-md"
            data-aos="fade-up"
          >
            <table className="min-w-full text-center md:text-left text-gray-300 mx-auto break-words">
              <tbody>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white w-40 break-words">
                    Name
                  </th>
                  <td className="py-3 px-4 break-words">Sakib Hossain</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white break-words">
                    Nationality
                  </th>
                  <td className="py-3 px-4 break-words">Bangladeshi</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white break-words">
                    Phone
                  </th>
                  <td className="py-3 px-4 break-words">+8801780619346</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white break-words">
                    Languages
                  </th>
                  <td className="py-3 px-4 break-words">Bengali, English</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white break-words">
                    Email
                  </th>
                  <td className="py-3 px-4 break-words">hossainsakib965@gmail.com</td>
                </tr>
                <tr>
                  <th className="py-3 px-4 font-semibold text-white break-words">
                    Address
                  </th>
                  <td className="py-3 px-4 break-words">Dinajpur, Rangpur, Bangladesh</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Resume Button */}
          <a
            // href="/Sakib_Hossain_Resume.pdf"
            href="https://drive.google.com/file/d/13AJtiyoOdis3j7-HXuisrprFYHuBWn2c/view"
            download
            className="relative inline-flex items-center py-3 pl-10 pr-6 rounded-lg border border-gray-400 bg-[#1A1F2D] text-white font-semibold overflow-hidden group transition-all duration-300 mt-8 hover:border-transparent mx-auto md:mx-0"
            data-aos="zoom-in-up"
          >
            <span className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-lg transition-all duration-300 group-hover:w-full group-hover:rounded-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600"></span>
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              <FaDownload />
              Resume!
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
