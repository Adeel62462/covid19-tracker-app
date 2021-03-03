import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Chart from './components/Chart';
import { fetchData } from './api';


function App() {
  const [data, setData] = useState({});
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    const fetchAPIData = async () => {
      setData(await fetchData());      
    }
    fetchAPIData();
  }, []);

  const onCountrySelected = async(country)=>{
    const response = await fetchData(country);
    setData(response);
    setCountryName(country);
  }

  return (
    <div className="container">
      <Header onCountrySelected={onCountrySelected} />
      <Statistics data={data} />
      <Chart data={data} country={countryName}/>
    </div>
  );
}

export default App;
