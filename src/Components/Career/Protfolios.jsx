// Import React and Tailwind
import "@fortawesome/fontawesome-free/css/all.min.css";
import bgImage from "../../assets/rsearch.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./Projects";
import Education from "./Education";
import Internships from "./Internships";
import Research from "./Research";
import Course from "./Course";
import Header from "./Header";
import Hero from "./Hero";

const Portfolios = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans ">
      <Header />
      {/* Main Content */}
      <main className="flex-1 ">
        {/* About Section */}

        <Hero />
        {/* Objective */}

        {/* <Objective/> */}
        <Education />
        <Internships />

        {/* <div
          className="bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${bgImage})` }}
        > */}

        {/* </div> */}
        <Course />
        <Projects />
        <Research />

        {/* Contact Section */}
        <section id="contact" className="bg-[#ffc582df] py-16">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Im available for collaborations or inquiries. Lets connect!
            </p>
            <a
              href="mailto:example@example.com"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-emerald-700 "
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white lg:py-10 py-4 text-center">
        <p className="text-sm">
          &copy; 2025 My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolios;
