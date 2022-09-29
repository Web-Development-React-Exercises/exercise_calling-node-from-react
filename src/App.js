import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');


  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then( res => {
        console.log(res.data.message);
        setMessage(res.data.message);
      }) .catch( err => {
        console.log(err);
      })
  }, [])
  

  return (
    <>
    <h3>This message was retrieved from my NodeJS server</h3>
    <p>{message}</p>
    </>
  );
}

export default App;
