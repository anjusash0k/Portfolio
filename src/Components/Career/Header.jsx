import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position

  // Toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      } py-4 px-8 shadow-md flex justify-between items-center fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in`}
    >
      <h1 className="text-3xl font-bold">{isScrolled ? "Anju S" : ""}</h1>

      {/* Hamburger Menu for Small Screens */}
      <button className="lg:hidden" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} fa-2x`}></i>
      </button>

      {/* Desktop Navigation */}
      <nav
        className={`lg:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        {[
          { label: "About", href: "#about" },
          { label: "Education", href: "#education" },
          { label: "Projects", href: "#projects" },
          { label: "Internships", href: "#internships" },
          { label: "Research Papers", href: "#research" },
          { label: "Courses", href: "#courses" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`${
              isScrolled
                ? "text-black hover:text-gray-700"
                : "text-gray-300 hover:text-white"
            } hover:underline transition`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
