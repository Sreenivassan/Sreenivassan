import { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">My Portfolio</div>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#about" className="hover:text-blue-600">
                About Me
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
            <li>
              <a href="#skills" className="hover:text-blue-600">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact Me
              </a>
            </li>
            <li>
              <a
                href="/Sreenivassan/Sreenivassan_R_Resume.pdf"
                download
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
