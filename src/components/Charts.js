import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export function PieChart({ chartData, chartTitle }) {
  return (
    <Pie
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: chartTitle
          }
        }
      }}
    />
  );
}
