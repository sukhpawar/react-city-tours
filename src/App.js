import React from 'react';

import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import TourList from'./components/TourList'

function App() {
  return (
  	<div className="grid-layout">
    <Header/>
    <TourList/>
    
    </div>
  );
}

export default App;
