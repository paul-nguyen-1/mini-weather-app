import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/weather/Houston')
    .then(res => {
      return res.json()
    })
    .then((data: any) => {
      console.log(data)
    })
  })
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
