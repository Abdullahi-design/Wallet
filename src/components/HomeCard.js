// HomeCard.js

import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsCurrencyBitcoin } from "react-icons/bs";
import './HomeCard.css';

const HomeCard = () => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="home-card">
      <div className='btc-logo-frame'>
        <div className='btc-header'>
            <span className='btc-logo'><BsCurrencyBitcoin /></span>
            <h1 className='btc-h1'>Bitcoin</h1>
        </div>
        <h1 className='btc-short'>BTC</h1>
      </div>
      <div className="price-container">
        <div>
          <p className='btc-price'>3.529020 BTC</p>
          <p className='usdt-price'>$19.153 USD</p>
        </div>
        <div className='percentage'>
          <p>-2.32%</p>
        </div>
      </div>
      <div className="toggle-container">
        <button className="toggle-button" onClick={() => setShowButtons(!showButtons)}>
          {showButtons ? <IoIosArrowUp className='icon' /> : <IoIosArrowDown className='icon' />}
        </button>
        {showButtons && (
          <div className="buttons-container">
            <button className="buy-button">Buy</button>
            <button className="sell-button">Sell</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
