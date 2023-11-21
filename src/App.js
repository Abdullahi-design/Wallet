import { useState } from 'react';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import HomeCard from './components/HomeCard';
import CryptoCard from './components/CryptoCard';
import TradeComponent from './components/TradeComponent';
import NavBar from './components/NavBar';

function App() {

  const [selectedPeriod, setSelectedPeriod] = useState('day');

  const handleSelectPeriod = (period) => {
    setSelectedPeriod(period);
    // You can perform additional actions based on the selected period if needed
  };

  return (
    <div className="App">
      <NavBar/>
      <HomeCard/>
      <Breadcrumbs selectedPeriod={selectedPeriod} onSelectPeriod={handleSelectPeriod} />
      <CryptoCard/>
      <TradeComponent/>
    </div>
  );
}

export default App;
