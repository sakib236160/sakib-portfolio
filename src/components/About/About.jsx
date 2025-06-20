import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0A0D18] text-white py-20 px-6 md:px-20 min-h-screen flex items-center mx-[25px]"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Right Image Section */}
     <div
  className="flex justify-center md:justify-end w-full md:w-[450px] h-[500px] order-1 md:order-2 mx-auto"
  data-aos="zoom-in"
>
  <img
    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    alt="Profile"
    className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-cyan-500"
  />
</div>

        {/* Left Text Section */}
        <div className="text-center md:text-left order-2 md:order-1 mx-auto md:mx-0 px-4 md:px-0">
          <p
            className="text-purple-400 uppercase font-semibold tracking-wider mb-3"
            data-aos="fade-down"
          >
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-4" data-aos="fade-right">
            Who am I?
          </h2>

          <h3
            className="text-2xl font-semibold text-cyan-400 mb-8 h-10"
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
            className="text-gray-300 leading-relaxed text-lg mb-10 max-w-3xl mx-auto md:mx-0"
            data-aos="fade-up"
          >
            I am Sakib Hossain, a passionate and dedicated web developer with
            strong expertise in the MERN stack. I have experience in building
            scalable and efficient web applications, focusing on both front-end
            and back-end development. I am a proactive team player with excellent
            communication skills and always strive to deliver high-quality work
            within deadlines.
          </p>

          <h4
            className="text-white font-semibold mb-6 border-b border-gray-700 pb-3 inline-block"
            data-aos="zoom-in"
          >
            Personal Information
          </h4>

          <div className="overflow-x-auto" data-aos="fade-up">
            <table className="min-w-full text-left text-gray-300 mx-auto md:mx-0">
              <tbody>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white w-40">
                    Name
                  </th>
                  <td className="py-3 px-4">Sakib Hossain</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white">
                    Nationality
                  </th>
                  <td className="py-3 px-4">Bangladeshi</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white">Phone</th>
                  <td className="py-3 px-4">+8801780619346</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white">
                    Languages
                  </th>
                  <td className="py-3 px-4">Bengali, English</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 font-semibold text-white">Email</th>
                  <td className="py-3 px-4">hossainsakib965@gmail.com</td>
                </tr>
                <tr>
                  <th className="py-3 px-4 font-semibold text-white">Address</th>
                  <td className="py-3 px-4">Dinajpur, Rangpur, Bangladesh</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Resume Button */}
          <a
            href="/Sakib_Hossain_Resume.pdf"
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
