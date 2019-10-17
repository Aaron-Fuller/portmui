import React from 'react';
import ButtonAppBar from './components/Navi'
//import SimpleCard from './components/SimpleCard'
import Hero from './components/hero.jpg'

function App() {
  return (
    <div className="App">
      <nav>
        <ButtonAppBar />
        <img src={Hero} width="100%" height="600" alt="hero"/>
        
      </nav>      
    </div>
  );
}

export default App;
