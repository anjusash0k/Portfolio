import prfl from "../../assets/Anju.jpeg";
import bgImg from "../../assets/stageBg1.webp"; // Import the background image
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
      useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <div>
      <section
        id="about"
        className="relative flex items-center justify-center py-20  lg:py-40 overflow-hidden bg-black/50"
        
      >
        {/* Background Image with Blur */}
        
        <div
          className="fixed inset-0 bg-cover bg-center -z-50 "
      
          style={{
          
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
        {/* bg-[#f0e2d7c7]  */}

        {/* Content Container */}
        <div className="relative text-center max-w-2xl z-10">
          <div className="relative top-10  mx-auto">
            {/* Profile Image */}
            <img
              src={prfl}
              alt="Profile"
              className="w-48  h-48 mx-auto rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="text-5xl font-bold mb-4 mt-10 text-white">Anju S</h2>
          <p
            className="text-lg text-white overflow-hidden whitespace-nowrap animate-typing"
            style={{
              animation: "typing 4s steps(50, end), blink 0.5s step-end 4s",
            }}
          >
            Discover my skills, projects, and achievements in the field of
            software development.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition text-white"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="mailto:anjuzashoks@gmail.com"
              className="hover:text-gray-300 transition text-white"
            >
              <i className="fas fa-envelope fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/anjuash0k/profilecard/?igsh=d3B5bHVtbXhoOTF5"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition text-white"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://github.com/anjusash0k"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition text-white"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
