import React from 'react';
import ButtonAppBar from './components/Navi'
import MyLandingPage from './components/Hero'


function App() {
  return (
    <div className="App">
      <nav>
        <ButtonAppBar />
        <MyLandingPage />
      </nav>      
    </div>
  );
}

export default App;
