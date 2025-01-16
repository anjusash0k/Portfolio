
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython,  FaPhp, FaJava } from 'react-icons/fa';  // Impor // Add icons
import  { useState } from 'react';

const projects = [
  {
    title: "Millet Master",
    technology: "Android, Python-Flask, Machine Learning",
    description:
      "A Suite of Softwares designed to deliver information to the farmers about the weather conditions and crop data using specialised methods such as Retrieval Augmented Generation (RAG), Generative AI, Prompt Engineering.",
  },
  {
    title: "Disease Prediction System",
    technology: "Python-Django, Machine Learning, MySQL",
    description:
      "This project aims to develop a machine learning model using convolutional neural networks (CNN) and random forest algorithm to predict the occurrence of pneumonia and heart disease.",
  },
  {
    title: "Estore",
    technology: "PHP, MySQL",
    description:
      "A PHP-based ecommerce platform for electronics goods. The project was made with HTML and CSS in the front end and MySQL as a database.",
  },
  {
    title:"Test Automation Framework - SauceDemo",
    technology: "Java, Selenium, TestNG",
    description:"A basic test automation framework designed to test the saucedemo.com website using page object model design pattern. The framework is made using Java, Selenium, TestNG and reporting using allure report."
    }
];


// Custom navigation buttons
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500 p-2 rounded-full hover:bg-gray-600"
    onClick={onClick}
  >
    <FaChevronRight size={20} />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500 p-2 rounded-full hover:bg-gray-600"
    onClick={onClick}
  >
    <FaChevronLeft size={20} />
  </div>
);

// PropTypes for the arrow components
CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

const Projects = () => {
  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  //card expand animation
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <section id="projects" className="py-8 px-2 bg-[#403d39] ">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        My Projects
      </h2>
      <div className="relative">
        <Slider {...settings} className="px-8">
          {projects.map((project, i) => (
            <div key={i} className="flex justify-center">
              <div
                onClick={() => handleCardClick(i)}
                className="bg-white w-[90%] sm:w-[350px] md:w-[450px] rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Card Header with Title and Icon */}
                <div className="bg-black flex items-center justify-center px-4 py-11">
                  <div className="flex items-center space-x-2">
                    {project.technology.includes("React") && <FaReact className="text-blue-500 text-3xl" />}
                    {project.technology.includes("Node.js") && <FaNodeJs className="text-green-500 text-3xl" />}
                    {project.technology.includes("Python") && <FaPython className="text-blue-500 text-3xl" />}
                    {project.technology.includes("PHP") && <FaPhp className="text-blue-400 text-3xl" />}
                    {project.technology.includes("Java") && <FaJava className="text-yellow-500 text-3xl" />}
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Card Body with Technologies and Description */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedIndex === i
                      ? "max-h-[300px] p-4 opacity-100"
                      : "max-h-0 p-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {/* Always visible Technology */}
                  <p className="text-lg text-gray-600 mb-2">
                    <strong>Technologies:</strong> {project.technology}
                  </p>
                  {/* Description */}
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  

  );
};

export default Projects;
