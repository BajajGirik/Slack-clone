import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div``;