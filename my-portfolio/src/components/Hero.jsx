import React from 'react'

function Hero() {
  return (
   <section className="min-h-screen flex items-center justify-center text-center bg-white">
    <div>
      <h1 className="text-5xl font-bold mb-4">Hi, I'm a React Developer</h1>
      <p className="text-xl mb-6">Building responsive and dynamic web apps</p>
      <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full">Contact Me</a>
    </div>
  </section>
  )
}

export default Hero