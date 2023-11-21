// CryptoCard.js

import React from 'react';
import { IoIosRadioButtonOff } from 'react-icons/io';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './CryptoCard.css';

const CryptoCard = () => {
  // Dummy data for the line chart
  const data = [
    { name: 'Jan', value: 5.2 },
    { name: 'Feb', value: 6.1 },
    { name: 'Mar', value: 5.8 },
    { name: 'Apr', value: 5.5 },
    // Add more data points as needed
  ];

  return (
    <div className="crypto-card">
      <div className="top-section">
        <div className='dot-class'>
          <IoIosRadioButtonOff className="red-dot" />
          <p>Lower: $4.895</p>
        </div>
        <div className='dot-class'>
          <IoIosRadioButtonOff className="green-dot" />
          <p>Higher: $6.857</p>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="#FFA500" strokeWidth={2} dot={false} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bottom-section">
        <div className="dot-and-text">
          <IoIosRadioButtonOff className="orange-dot" />
          <p>1 BTC = $5.483</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
