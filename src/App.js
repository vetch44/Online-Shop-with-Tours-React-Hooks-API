import React from 'react';
import ContextProvider from './Contexts/context';
import Wrapper from './Components/wrapper'
import './App.css';


const App = () => {

  return (
    <div className="App">
      <ContextProvider>
      <Wrapper />
      </ContextProvider>
    </div>
  );
}

export default App;
