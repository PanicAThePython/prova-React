import { React, useEffect } from 'react';
import Lista from './components/Lista';
import './App.css';

function App() {
  useEffect(() => {
    async function fetchData() {
      await fetch('/data.json', {
        headers: {
          Accept: 'apliccation/json',
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);


  return (<Lista />);
}
export default App;
