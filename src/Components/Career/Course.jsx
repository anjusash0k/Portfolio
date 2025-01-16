import { motion } from "framer-motion";
import certificateImage from "../../assets/rsearch.png"; // Update the image path

const Course = () => {
  // Parent animation variants
  const containerVariants = {
    hidden: { opacity: 1 }, // Ensures the container is always visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger child animations by 0.3s
      },
    },
  };

  // Child animation variants for each text line
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="courses" className="bg-[#fca21189]">
      {/* Main container with grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Side - Course Details */}
        <motion.div
          className="flex flex-col justify-center items-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.h2
            className="text-5xl font-bold text-center text-white mb-2"
            variants={fadeUpVariants}
          >
            Certificates
          </motion.h2>

          {/* Course Item 1 */}
          <motion.div className="text-center" variants={fadeUpVariants}>
            <h3 className="text-2xl font-semibold text-white">MERN-Stack</h3>
            <p className="text-white">NextGen MERN Development 2024 Edunet x EY</p>
            <p className="text-white">Completed: 2024</p>
          </motion.div>

          {/* Course Item 2 */}
          <motion.div className="text-center" variants={fadeUpVariants}>
            <h3 className="text-2xl font-semibold text-white">DevOps</h3>
            <p className="text-white">Coursera</p>
            <p className="text-white">Completed: 2023</p>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={certificateImage}
            alt="Certificate Image"
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Course;
