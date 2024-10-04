import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

const Sales = ({ sales }) => {
  console.log("SALES", sales);

  const formateDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  return (
    <div className="sm:flex justify-around flex-wrap gap-4">
      {/* Bar Chart */}
      <div className="border border-black bg-white rounded-xl drop-shadow-md w-full sm:w-1/2 mb-4 sm:mb-0">
        <div className="flex justify-between p-2">
          <h1>Orders</h1>
          <button id="button">View All</button>
        </div>
        <div className="flex justify-center" style={{ height: '250px' }}>
          <Bar
            data={{
              labels: sales.map(item => formateDate(item.delivered_date)),
              datasets: [
                {
                  label: 'Revenue',
                  data: sales.map(item => item.amount),
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      {/* Doughnut Chart */}
      <div className="border border-black bg-white rounded-xl drop-shadow-md w-full sm:w-1/3 h-96">
        <div className="flex justify-between p-2">
          <h1>Orders</h1>
          <button id="button">View All</button>
        </div>
        <div className="mx-auto" style={{ height: '250px' }}>
          <Doughnut
            data={{
              labels: sales.map(item => formateDate(item.delivered_date)),
              datasets: [
                {
                  label: 'Revenue',
                  data: sales.map(item => item.amount),
                  backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
