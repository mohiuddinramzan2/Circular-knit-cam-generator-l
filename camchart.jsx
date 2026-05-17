import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CamChart({ data, title }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 capitalize">
        {title} Cam Graph
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="needle" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="cam"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
