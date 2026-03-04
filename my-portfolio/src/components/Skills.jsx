import javascript from "../assetes/images/javascript.png";
import react from "../assetes/images/react.png";
import bootstrap from "../assetes/images/bootstarap.png";
import tailwind from "../assetes/images/tailwind.png";
import git from "../assetes/images/git.png";
import postman from "../assetes/images/postman.jpg";
import nodejs from "../assetes/images/Node.js_logo.svg.webp"
import CustomImage from "../UI/CustomImage";

function Skills() {
  return (
    <section className="py-16 px-8 bg-white" id="skills">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-between gap-4">
        <CustomImage src={bootstrap} alt="BootStrap Logo" />
        <CustomImage src={javascript} alt="JavaScript Logo" />
        <CustomImage src={react} alt="React Logo" />
        
        <CustomImage src={tailwind} alt="TailWind Logo" />
        <CustomImage src={git} alt="Git Logo" />
        <CustomImage src={postman} alt="Postman Logo" />
         <CustomImage src={nodejs} alt="NodeJS Logo" />
      </div>
    </section>
  );
}

export default Skills;
