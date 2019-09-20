import React from 'react';
import './App.css';
import Map from "./factory/Map"

function App() {
  return (
    <Map x={4} y={4} nbGoofers={3} time={5000} />
  );
}

export default App;
