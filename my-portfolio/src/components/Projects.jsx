import React from 'react'

function Projects() {
  return (
    <section className="py-16 px-8 bg-white" id="projects">
    <h2 className="text-3xl font-semibold mb-4">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-4 shadow-lg rounded bg-gray-100">
        <h3 className="text-xl font-bold">Project One</h3>
        <p className="my-2">Description of the project goes here.</p>
        <a href="#" className="text-blue-500">View Code</a>
      </div>
      <div className="p-4 shadow-lg rounded bg-gray-100">
        <h3 className="text-xl font-bold">Project Two</h3>
        <p className="my-2">Another project description here.</p>
        <a href="#" className="text-blue-500">View Code</a>
      </div>
    </div>
  </section>
  )
}

export default Projects