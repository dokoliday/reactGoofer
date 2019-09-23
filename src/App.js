import React from 'react';
import './App.css';
import Map from "./factory/Map"

function App() {
  return (
    <Map x={2} y={2} nbGoofers={3} time={1000} />
  );
}

export default App;
