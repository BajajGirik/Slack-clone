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