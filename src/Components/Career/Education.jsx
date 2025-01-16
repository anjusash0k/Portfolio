import { motion } from "framer-motion";

const Education = () => {
  const educationDetails = [
    {
      title: "10th-Secondary School",
      subject: "SSLC-Secondary School Leaving Certificate",
      percentage: "82%",
      rollNo: "203058",
      school: {
        name: "VVHSS",
        url: "https://schools.org.in/alappuzha/32110601009/vvhss-thamarakulam.html",
      },
      location: "Alappuzha, Kerala, India",
      bgColor: "#fca21189",
      textColor: "text-white",
    },
    {
      title: "+12-High Secondary School",
      subject: "Computer Science",
      percentage: "72%",
      rollNo: "203058",
      school: {
        name: "Govt:VHSS",
        url: "https://schools.org.in/alappuzha/32110700504/govt-vhss-chunakkara.html",
      },
      location: "Alappuzha, Kerala, India",
      bgColor: "#eb5f28ab",
      textColor: "text-white",
    },
    {
      title: "Under Graduation",
      subject: "Bachelor Of Computer Application",
      cgpa: "6.9/10",
      rollNo: "203058",
      college: {
        name: "CAS, Mavelikara",
        url: "https://casmvk.kerala.gov.in/",
      },
      location: "Alappuzha, Kerala, India",
      bgColor: "#403d39",
      textColor: "text-white",
    },
    {
      title: "Post Graduation",
      subject: "Master Of Computer Application",
      cgpa: "7.3/10",
      college: {
        name: "Amrita School Of Computing",
        url: "https://www.amrita.edu/school/engineering/amritapuri/",
      },
      location: "Kollam, Kerala, India",
      bgColor: "#F3F4F6",
      textColor: "text-black",
    },
  ];

  return (
    <section id="education" className="bg-[#daaf9c]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className={`shadow-lg p-6 ${edu.textColor} transition-all duration-300`}
            style={{ backgroundColor: edu.bgColor }}
          >
            {/* Title */}
            <motion.h3
              className="text-xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {edu.title}
            </motion.h3>

            {/* Subject */}
            <motion.p
              className="mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
            >
              <strong>Subject:</strong> {edu.subject}
            </motion.p>

            {/* Percentage */}
            {edu.percentage && (
              <motion.p
                className="mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
              >
                <strong>Percentage:</strong> {edu.percentage}
              </motion.p>
            )}

            {/* CGPA */}
            {edu.cgpa && (
              <motion.p
                className="mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              >
                <strong>CGPA:</strong> {edu.cgpa}
              </motion.p>
            )}

            {/* Roll Number */}
            {edu.rollNo && (
              <motion.p
                className="mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                <strong>Roll no:</strong> {edu.rollNo}
              </motion.p>
            )}

            {/* School/College */}
            <motion.p
              className="mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            >
              <strong>School/College: </strong>
              <a
                href={edu.school?.url || edu.college?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold hover:underline transition"
                style={{
                  color: edu.textColor === "text-white" ? "#ffffff" : "#000000",
                }}
              >
                {edu.school?.name || edu.college?.name}
              </a>
            </motion.p>

            {/* Location */}
            <motion.p
              className="mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
            >
              <strong>Location:</strong> {edu.location}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
