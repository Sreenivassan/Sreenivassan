import { Fragment } from "react";
import { experienceData } from "../utils/experience";
import CustomExperience from "../UI/CustomExperience";

function Experience() {
  return (
    <Fragment>
      <div className="py-16 px-8 space-y-8 bg-gray-50" id="experience">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>

        {experienceData.map((exp, index) => (
          <CustomExperience key={index} exp={exp} />
        ))}
      </div>
    </Fragment>
  );
}

export default Experience;
