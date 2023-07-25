import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';



const Newutton = () => {
  return (
    <button>
      api click

    </button>
  )
}

function App() {
  const [data,setData]=useState([]);
const [isLoading,setIsLoading]=useState(false);
const apicall = () => {
  setIsLoading(true);
  axios.get('https://cat-fact.herokuapp.com/facts/').then(responce => {
    console.log('Responce From Api',responce);
    setData(responce.data);
    setIsLoading(false);
    console.log('Responce From Api data',data);
    console.log('Responce From Api bool',isLoading);
  }).catch(error => {
    console.log('Error Fetching Data On Api',error);
    setIsLoading(false);
  });
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
          <Newutton />
        <button onClick={apicall}>Fetch data</button>
        {isLoading ? <p>Loading...</p> : <p>{data.length}</p>}
      </header>
    </div>
  );
}

export default App;
