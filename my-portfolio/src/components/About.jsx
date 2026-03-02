import { aboutMe } from "../utils/aboutme";

function About() {
  console.log(aboutMe);
  return (
    <section className="py-16 px-8 bg-gray-50" id="about">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>

      <p>{aboutMe[0].aboutMe}</p>
    </section>
  );
}

export default About;
