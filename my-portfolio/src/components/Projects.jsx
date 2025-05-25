import projectsData from "../util";

function Projects() {
  return (
    <section className="py-16 px-8 bg-white" id="projects">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((item, index) => (
          <div key={index} className="p-4 shadow-lg rounded bg-gray-100">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="my-2">{item.intro}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
