import { Fragment } from "react";

function Experience() {
  return (
    <Fragment>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Web App Developer II
          </h2>
          <p className="text-sm text-gray-600">
            Charles Technologies, January 2024 – Current · Chennai
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Developed scalable web applications emphasizing performance and
              maintainability.
            </li>
            <li>
              Collaborated with cross-functional teams to implement responsive
              UI using React JS.
            </li>
            <li>
              Engineered secure frontend architecture, enhancing overall
              application integrity.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">UI/UX Developer</h2>
          <p className="text-sm text-gray-600">
            Avons Global Solutions Private Limited, July 2021 – September 2023 · Chennai
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Designed and developed responsive user interfaces from wireframes using React and Bootstrap.
            </li>
            <li>Created reusable components to enhance development efficiency.</li>
            <li>Supported backend integration for seamless user experiences.</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Experience;
