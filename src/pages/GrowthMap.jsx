import React from 'react';
import { useQuery } from 'wasp/client/operations';
import { getUserGrowthMap } from 'wasp/client/operations';
import { Radar } from 'react-chartjs-2';
import { Link } from 'wasp/client/router';

const GrowthMapPage = () => {
  const { data: traits, isLoading, error } = useQuery(getUserGrowthMap);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const data = {
    labels: traits.map(trait => trait.name),
    datasets: [
      {
        label: 'Growth Score',
        data: traits.map(trait => trait.growthScore),
        backgroundColor: 'rgba(34, 202, 236, .2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Your Growth Map</h1>
      <Radar data={data} options={options} />
      <div className="mt-4">
        <Link to="/reflection-journal" className="text-blue-500 hover:underline">
          Go to Reflection Journal
        </Link>
      </div>
    </div>
  );
};

export default GrowthMapPage;
