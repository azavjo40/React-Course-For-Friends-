import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routers/Router';
import { Navbar } from './containers/navbar/Navbar';
import { useState } from 'react';
import { Context } from './context/Context';

function App() {
  const [valueVasket, setBalueVasket] = useState([])
  return (
    <Context.Provider value={{ valueVasket, setBalueVasket }}>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Router />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
