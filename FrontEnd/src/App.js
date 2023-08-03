import React, { useState } from 'react';
import { BrowserRouter, Route,} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import UseToken from './components/useToken';

function setToken(useToken) {
  sessionStorage.setItem('token', JSON.stringify(UseToken));
}

function getToken() {
}

function App() {

  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Welcome!</h1>
      <BrowserRouter>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;