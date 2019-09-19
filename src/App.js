import React from 'react';
import './App.css';
import Map from "./factory/Map"

function App() {
  return (
    <Map x={2} y={2} nbGoofers={2} time={5000} />
  );
}

export default App;
