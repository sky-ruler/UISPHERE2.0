import React from 'react';
import { statsData } from '../../../data/stats';

export const StatsGrid: React.FC = () => {
  return (
    <div className="stats-grid-4">
      {statsData.map((stat, idx) => (
        <div key={idx} className="stat-tile">
          <span className="stat-number" style={{ color: stat.color }}>
            {stat.number}
          </span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

