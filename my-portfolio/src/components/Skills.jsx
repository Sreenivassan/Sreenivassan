import React from 'react'

function Skills() {
  return (
    <section className="py-16 px-8 bg-gray-50" id="skills">
    <h2 className="text-3xl font-semibold mb-4">Skills</h2>
    <ul className="flex flex-wrap gap-4">
      <li className="bg-blue-100 px-4 py-2 rounded">React</li>
      <li className="bg-blue-100 px-4 py-2 rounded">JavaScript</li>
      <li className="bg-blue-100 px-4 py-2 rounded">HTML</li>
      <li className="bg-blue-100 px-4 py-2 rounded">CSS</li>
      <li className="bg-blue-100 px-4 py-2 rounded">Tailwind CSS</li>
    </ul>
  </section>
  )
}

export default Skills