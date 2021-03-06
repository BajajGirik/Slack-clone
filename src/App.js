import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat'
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './Components/Login';

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <LoadContainer>
            <LoadMid>
                <img src="https://yt3.ggpht.com/ytc/AAUvwnhZtcTvJEkvuZMdTzjhPLvZGIQSo9nel4btx7j9rg=s900-c-k-c0x00ffffff-no-rj" alt="" />
                <h2>Slack</h2>
                <span></span>
                <span></span>
                <span></span>
            </LoadMid>
      </LoadContainer>
    );
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
           </> 
        )}
          
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  height: 100vh;
  display: flex;
`;

const LoadContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadMid = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 10em;
  border-radius: 1em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
  0 1px 2px rgba(0, 0, 0, 0.24);
  
  > h2 {
    margin-bottom: 1.4em;
  }

  > img {
      object-fit: contain;
      height: 100px;
    }

  > span {
    display: inline-block;
    background-color: purple;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0.4em;
  }

  > span:nth-of-type(1){
    animation: translate 2s ease-in-out infinite;
  }
  > span:nth-of-type(2){
    animation: translate 2s ease-in-out 0.5s infinite;
  }
  > span:nth-of-type(3){
    animation: translate 2s ease-in-out 1s infinite;
  }
`;
