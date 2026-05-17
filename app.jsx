import { useState } from "react";
import axios from "axios";
import PatternForm from "./components/PatternForm";
import CamChart from "./components/CamChart";

export default function App() {
  const [graphData, setGraphData] = useState([]);
  const [patternName, setPatternName] = useState("");
  const [error, setError] = useState("");

  const fetchPattern = async (name) => {
    try {
      setError("");

      const response = await axios.get(
        `http://localhost:5000/api/pattern/${name}`
      );

      setGraphData(response.data.graph);
      setPatternName(response.data.pattern);
    } catch (err) {
      setError("Pattern not found");
      setGraphData([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Circular Knitting Cam Graph Generator
        </h1>

        <PatternForm onSearch={fetchPattern} />

        {error && (
          <div className="mt-5 text-red-600 font-semibold">
            {error}
          </div>
        )}

        {graphData.length > 0 && (
          <CamChart data={graphData} title={patternName} />
        )}
      </div>
    </div>
  );
}
