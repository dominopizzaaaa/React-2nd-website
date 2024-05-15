import React from 'react';
import './App.css';
import Main from "./Main"
import Header from './Header';
import Achievements from './Achievements'

function App() {
  return (
    <div className="App">
      <Header />
      <Achievements />
      <Main />
    </div>
  );
}

export default App;

