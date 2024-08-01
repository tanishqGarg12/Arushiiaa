import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const InventoryDashboard = ({ items = [] }) => {
  // Dummy data for demonstration purposes
  const newItems = 5;
  const purchasedItems = 12;
  const soldItems = 8;
  const purchasedValue = 30000;
  const salesValue = 50000;
  const totalStock = 15;

  // Different data for sales and purchases charts
  const salesData = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
  const purchasesData = [35, 55, 50, 45, 85, 95, 105, 115, 125, 100, 120, 110];

  const salesChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        type: 'line',
        label: 'Sales',
        data: salesData,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        fill: true,
        yAxisID: 'y',
      },
      {
        type: 'bar',
        label: 'Monthly Sales',
        data: salesData,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        yAxisID: 'y',
      },
    ],
  };

  const purchasesChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        type: 'line',
        label: 'Purchases',
        data: purchasesData,
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        fill: true,
        yAxisID: 'y',
      },
      {
        type: 'bar',
        label: 'Monthly Purchases',
        data: purchasesData,
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        yAxisID: 'y',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales and Purchases',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 rounded-lg shadow p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold text-white mb-2">New Items</h2>
          <p className="text-xl font-bold text-white">{newItems}</p>
        </div>
        <div className="bg-green-500 rounded-lg shadow p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold text-white mb-2">Purchased Items</h2>
          <p className="text-xl font-bold text-white">{purchasedItems}</p>
        </div>
        <div className="bg-yellow-500 rounded-lg shadow p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold text-white mb-2">Sold Items</h2>
          <p className="text-xl font-bold text-white">{soldItems}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-indigo-500 rounded-lg shadow p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold text-white mb-2">Purchased Value</h2>
          <p className="text-xl font-bold text-white">${purchasedValue.toFixed(2)}</p>
        </div>
        <div className="bg-red-500 rounded-lg shadow p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold text-white mb-2">Sales Value</h2>
          <p className="text-xl font-bold text-white">${salesValue.toFixed(2)}</p>
        </div>
        <div className="bg-teal-500 rounded-lg shadow p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold text-white mb-2">Total Stock</h2>
          <p className="text-xl font-bold text-white">{totalStock}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div style={{ height: '400px' }}>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Yearly Sales</h2>
          <Line data={salesChartData} options={chartOptions} />
        </div>
        <div style={{ height: '400px' }}>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Yearly Purchases</h2>
          <Line data={purchasesChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;
