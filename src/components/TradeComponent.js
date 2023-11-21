// TradeComponent.js

import React from 'react';
import './TradeComponent.css';
import { FaDollarSign } from "react-icons/fa";

const TradeComponent = () => {
  return (
    <div className="trade-container">
      <div className="trade-card buy-card">
        <span className='buy-dollar'><FaDollarSign/></span>
        <h3>Buy BTC</h3>
        {/* Add additional content for the "Buy" card if needed */}
      </div>
      <div className="trade-card sell-card">
        <span className='sell-dollar'><FaDollarSign/></span>
        <h3>Sell BTC</h3>
        {/* Add additional content for the "Sell" card if needed */}
      </div>
    </div>
  );
};

export default TradeComponent;
