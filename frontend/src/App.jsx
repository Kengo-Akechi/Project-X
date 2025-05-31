import React, { useState } from "react";
import MoodForm from "./MoodForm";
import Suggestions from "./Suggestions";

function App() {
  const [result, setResult] = useState(null);

  const handleMoodSubmit = async (text) => {
    const res = await fetch("http://localhost:5000/detect_mood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">AI Mood Companion</h1>
      <MoodForm onSubmit={handleMoodSubmit} />
      {result && <Suggestions mood={result.mood} recommendations={result.recommendations} />}
    </div>
  );
}

export default App;
