import React from 'react';
import './Imageslider.css';
import jsonData from './properties.json';

console.log(jsonData);
function Imageslider() {
  return (
    <div>
        {jsonData.properties.id}
    </div>
  )
}

export default Imageslider