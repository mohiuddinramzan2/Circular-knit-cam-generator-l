import { useState } from "react";

export default function PatternForm({ onSearch }) {
  const [pattern, setPattern] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pattern.trim()) return;

    onSearch(pattern);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mt-6">
      <input
        type="text"
        placeholder="Enter fabric design name"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        className="flex-1 border rounded-xl px-4 py-3"
      />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Generate
      </button>
    </form>
  );
}
