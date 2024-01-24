import { useEffect, useState } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/weather/Houston')
    .then(res => {
      return res.json()
    })
    .then((data: any) => {
      data.map((item: any) => console.log('weather',item) )
    })
  })

  useEffect(() => {
    fetch('http://localhost:3000/geolocation/Houston')
    .then(res => {
      return res.json()
    })
    .then((data: any) => {
      data.map((item: any) => console.log('geolocation',item) )
    })
  })


  return (
    <>
      <div></div>
    </>
  );
}

export default App;
