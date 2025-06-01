import javascript from "../assetes/images/javascript.png";
import react from '../assetes/images/react.png';
import bootstrap from '../assetes/images/bootstarap.png';
import tailwind from '../assetes/images/tailwind.png';
import git from '../assetes/images/git.png';
import postman from '../assetes/images/postman.jpg';

function Skills() {
  return (
    <section className="py-16 px-8 bg-white" id="skills">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-between gap-4">
        <img
            src={javascript}
            alt="JavaScript Logo"
            className="w-24 h-24 object-contain rounded-full shadow-lg bg-white p-2"
          />
          <img
            src={react}
            alt="JavaScript Logo"
            className="w-24 h-24 object-contain rounded-full shadow-lg bg-white p-2"
          />
           <img
            src={bootstrap}
            alt="JavaScript Logo"
            className="w-24 h-24 object-contain rounded-full shadow-lg bg-white p-2"
          />
          <img
            src={tailwind}
            alt="JavaScript Logo"
            className="w-24 h-24 object-contain rounded-full shadow-lg bg-white p-2"
          />
           <img
            src={git}
            alt="JavaScript Logo"
            className="w-24 h-24 object-contain rounded-full shadow-lg bg-white p-2"
          />
           <img
            src={postman}
            alt="JavaScript Logo"
            className="w-24 h-24 object-contain rounded-full shadow-lg bg-white p-2"
          />
      </div>
    </section>
  );
}

export default Skills;
