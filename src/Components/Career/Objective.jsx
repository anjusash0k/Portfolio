import obj from "../../assets/objective.jpeg";

const Objective = () => {
  return (
    <div>
<section id="objective" className="py-20 bg-[#ffe5d9] ">
          <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row  items-center lg:space-x-100">
            {/* Left Side - Image */}
            <div className="flex-shrink-0">
              <img
                src={obj}
                alt="Objective Image"
                className="w-[500px]  h-[600px] object-cover shadow-lg"
                data-aos="fade-out"
                data-aos-easing="linear"
                data-aos-duration="2000"
              />
            </div>

            {/* Right Side - Objective Content */}
            <div
              className="mt-8 lg:mt-0  lg:w-1/3 sm:lg:w-2/3 sm:ml-auto"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                About Me
              </h2>
              <blockquote className="text-2xl text-gray-700 font-light relative">
                <span className="text-6xl text-gray-400 absolute -left-8 top-0">
                  “
                </span>
                My objective is to leverage my technical expertise and creative
                problem-solving skills to build impactful and innovative
                solutions. I'm driven to continuously grow and contribute
                meaningfully to the ever-evolving tech landscape. Ultimately, I
                strive to harness technology to drive positive change and
                improve lives.
                <span className="text-6xl text-gray-400 absolute -right-8 bottom-0">
                  ”
                </span>
              </blockquote>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Objective
