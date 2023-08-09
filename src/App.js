import React from 'react';
import CardContainer from './components/CardContainer/CardContainer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        <Sidebar></Sidebar>
        <CardContainer></CardContainer>
      </div>
    </div>
  );
}

export default App;
