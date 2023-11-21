// Breadcrumbs.js

import React from 'react';
import './Breadcrumbs.css'; // Make sure to create this CSS file

const Breadcrumbs = ({ selectedPeriod, onSelectPeriod }) => {
  return (
    <div className="breadcrumbs">
      <span
        className={selectedPeriod === 'day' ? 'active' : ''}
        onClick={() => onSelectPeriod('day')}
      >
        Day
      </span>
      <span
        className={selectedPeriod === 'week' ? 'active' : ''}
        onClick={() => onSelectPeriod('week')}
      >
        Week
      </span>
      <span
        className={selectedPeriod === 'month' ? 'active' : ''}
        onClick={() => onSelectPeriod('month')}
      >
        Month
      </span>
      <span
        className={selectedPeriod === 'year' ? 'active' : ''}
        onClick={() => onSelectPeriod('year')}
      >
        Year
      </span>
    </div>
  );
};

export default Breadcrumbs;
