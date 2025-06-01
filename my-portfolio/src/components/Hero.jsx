import profileImg from '../assetes/images/ssss.JPG'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Sreenivassan</h1>
          <p className="text-xl mb-6">A React Developer building responsive and dynamic web apps</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
            <a
              href="/Sreenivassan/Sreenivassan_R_Resume.pdf"
              download
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src={profileImg} 
            alt="Profile"
            className="w-72 h-88 object-cover rounded-full shadow-xl/20"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
