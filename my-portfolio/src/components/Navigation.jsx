import { Fragment, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <Fragment>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 h-16 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">&lt;SR /&gt;</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#about" className="hover:text-blue-600">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-blue-600">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
            </li>
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={closeSidebar}>
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <ul className="flex flex-col p-6 space-y-4 text-gray-700 font-medium">
          <li>
            <a href="#about" onClick={closeSidebar} className="hover:text-blue-600">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeSidebar} className="hover:text-blue-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeSidebar} className="hover:text-blue-600">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeSidebar} className="hover:text-blue-600">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Navbar;
