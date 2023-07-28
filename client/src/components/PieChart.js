import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const circularClipPlugin = {
  id: 'circularClip',
  beforeDraw: (chart) => {
    const { ctx } = chart;
    const { left, top, width, height } = chart.chartArea;
    const radius = Math.min(width, height) / 2;

    ctx.save();
    ctx.beginPath();
    ctx.arc(left + width / 2, top + height / 2, radius, 0, 2 * Math.PI);
    ctx.clip();
  },
  afterDraw: (chart) => {
    chart.ctx.restore();
  },
};

Chart.register(circularClipPlugin);

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          circularClip: {
            backgroundColor: 'transparent',
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <>
      <div className='header'>
        <div className='links'></div>
      </div>
      <canvas ref={chartRef} />
    </>
  );
};

export default PieChart;