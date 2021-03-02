import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Statistics from './components/Statistics';
import { fetchData, fetchCountryData } from './api';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAPIData = async () => {
      const response = await fetchData();
      setData(response);      
    }
    fetchAPIData();
  }, []);

  const onCountrySelected = async(country)=>{
    const response = await fetchCountryData(country);
    setData(response);
  }

  return (
    <div>
      <Header onCountrySelected={onCountrySelected}/>
      <Statistics data={data}/>
    </div>
  );
}

export default App;
