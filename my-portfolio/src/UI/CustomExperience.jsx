function CustomExperience({ exp }) {
  return (
    <div className="space-y-2">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">{exp.designation}</h2>

        <p className="text-sm text-gray-600">
          {exp.name} | {exp.period} | {exp.place}
        </p>

        <div className="list-disc list-inside text-gray-700 mt-3 space-y-2">
          {exp.points.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomExperience;
