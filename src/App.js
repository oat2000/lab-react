import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';

const word = "School";
function App() {
  return (
    <div>
      <WordCard value={word}/>
    </div>
  );
}

export default App;
