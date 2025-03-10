import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan 1", website: 400, social: 24 },
  { name: "Jan 2", website: 600, social: 36 },
  { name: "Jan 3", website: 500, social: 30 },
  { name: "Jan 4", website: 700, social: 40 },
];

const ChartComponent = () => {
  return (
    <div className="bg-white dark:bg-custom-dark dark:text-[#E0E0E0] p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-bold">Traffic Sources</h3>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="website" fill="#4A90E2" />
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="social" stroke="#28C76F" />
        </LineChart>
      </BarChart>
    </div>
  );
};

export default ChartComponent;
