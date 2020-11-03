import React from 'react';
import './App.css';
import Input from './components/input/Input';
import Search from './components/search/Search';
import Buttons from './components/buttons/Buttons';

function App() {
  return (
    <div className="App">
      <Input/>
      <Search/>
      <Buttons/>
    </div>
  );
}

export default App;
