import { motion } from "framer-motion";
import inten from "../../assets/Internship.jpg";

const Internships = () => {
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
    <section id="internships" className="bg-[#eb5f28d1]">
      <div className="shadow-lg grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={inten}
            alt="MERN-Stack Intern"
            className="w-full h-auto object-cover md:max-h-[400px] lg:max-h-[500px]"
          />
        </div>

        {/* Right Side - Animated Text */}
        <motion.div
          className="flex flex-col justify-center items-center text-center md:text-left px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-5xl font-semibold text-white mb-4"
            variants={fadeUpVariants}
          >
            Internship
          </motion.h3>
          <motion.h3
            className="text-2xl font-semibold text-white"
            variants={fadeUpVariants}
          >
            MERN-Stack Intern
          </motion.h3>
          <motion.p
            className="text-white mt-2"
            variants={fadeUpVariants}
          >
            Neyndra Global Solutions Private Limited
          </motion.p>
          <motion.p
            className="text-white mt-1"
            variants={fadeUpVariants}
          >
            Nov to Jan, 2024-25
          </motion.p>
          <motion.p
            className="text-white mt-4"
            variants={fadeUpVariants}
          >
            Worked on full-stack development, building web applications with
            React and Tailwind.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
