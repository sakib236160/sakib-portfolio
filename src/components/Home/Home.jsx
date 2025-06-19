import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <main className="bg-[#0d1117] text-white">
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
};

export default Home;
