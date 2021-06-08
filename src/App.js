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
                <span>.</span>
                <span>.</span>
                <span>.</span>
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

const LoadContainer = styled.div``;
const LoadMid = styled.div``;
