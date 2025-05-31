import React from "react";

function Suggestions({ mood, recommendations }) {
  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Detected Mood: <span className="text-blue-600">{mood}</span></h2>
      <ul className="list-disc list-inside space-y-1">
        {recommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;

