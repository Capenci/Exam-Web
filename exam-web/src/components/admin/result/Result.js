import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Jan',
    value: 100,
  },
  {
    name: 'Feb',
    value: 120,
  },
  {
    name: 'Mar',
    value: 90,
  },
];

function Result() {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

export default Result;