import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './GraphComponent.css';
import graphData from '../../jsons/graph';


const GraphComponent = () => {
  const [activeGraph, setActiveGraph] = useState('line');
  const [activeTab, setActiveTab] = useState('monthly');

  const handleGraphChange = (graph) => {
    setActiveGraph(graph);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const graphOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const monthlyGraphData = graphData[0]?.data || [];
  const quarterlyGraphData = graphData[1]?.data || [];
  const monthlyLabels = graphData[0]?.labels || [];
  const quarterlyLabels = graphData[1]?.labels || [];

  const lineDataOptions = {
    labels: activeTab === 'monthly' ? monthlyLabels : quarterlyLabels,
    datasets: [
      {
        label: 'Sales Amount',
        data: activeTab === 'monthly' ? monthlyGraphData : quarterlyGraphData,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const barDataOptions = {
    labels: activeTab === 'monthly' ? monthlyLabels : quarterlyLabels,
    datasets: [
      {
        label: 'Sales Amount',
        data: activeTab === 'monthly' ? monthlyGraphData : quarterlyGraphData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="graph-container">
      <h1>Graphical Represntation</h1>
      <div className="graph-tabs">
        <button
          onClick={() => handleGraphChange('line')}
          className={`graph-tab-btn ${activeGraph === 'line' ? 'active' : ''}`}
        >
          Line Graph
        </button>
        <button
          onClick={() => handleGraphChange('bar')}
          className={`graph-tab-btn ${activeGraph === 'bar' ? 'active' : ''}`}
        >
          Column Chart
        </button>
      </div>
      <div className="tabs">
        <button
          onClick={() => handleTabChange('monthly')}
          className={`btn ${activeTab === 'monthly' ? 'btn-primary' : 'btn-secondary'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => handleTabChange('quarterly')}
          className={`btn ${activeTab === 'quarterly' ? 'btn-primary' : 'btn-secondary'}`}
        >
          Quarterly
        </button>
      </div>
      <div className="graph">
        {activeGraph === 'line' ? (
          <Line data={lineDataOptions} options={graphOptions} />
        ) : (
          <Bar data={barDataOptions} options={graphOptions} />
        )}
      </div>
    </div>
  );
};

export default GraphComponent;
