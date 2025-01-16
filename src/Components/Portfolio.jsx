// Import React and Tailwind
import '@fortawesome/fontawesome-free/css/all.min.css';


const Portfolio = () => {
  return (
    <div className="bg-blue-50 min-h-screen text-blue-900">
      {/* Header Section */}
      <header className="bg-blue-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">My Portfolio</h1>
          <p className="text-lg">Welcome to my personal space!</p>
        </div>
      </header>

      {/* Profile Section */}
      <section id="profile" className="py-12 bg-blue-800 text-white ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">My Profile</h2>
          <p className="text-lg">Creative and motivated developer with a passion for building efficient and scalable applications.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-12 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="mailto:example@example.com" className="hover:text-blue-700"><i className="fas fa-envelope"></i> Email</a>
            <a href="tel:+1234567890" className="hover:text-blue-700"><i className="fas fa-phone"></i> Phone</a>
            <a href="https://linkedin.com" className="hover:text-blue-700"><i className="fab fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">I am a lifelong learner, enthusiastic about technology, and focused on creating impactful digital solutions.</p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
          <ul className="list-disc text-lg pl-8">
            <li><strong>10th:</strong> XYZ High School, 85%</li>
            <li><strong>+2:</strong> ABC Intermediate College, 90%</li>
            <li><strong>UG:</strong> DEF University, BSc Computer Science, 8.5 CGPA</li>
            <li><strong>PG:</strong> GHI University, MSc Computer Science, 9.0 CGPA</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill().map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-4 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">Project {i + 1}</h3>
                <p className="text-sm">A brief description of the project goes here. It highlights key features and technologies used.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
