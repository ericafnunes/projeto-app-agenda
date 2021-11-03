import './App.css';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';


import { AuthProvider } from './Context/AuthContext';




function App() {


  return (
    <AuthProvider>
      <div className="App">
        <Router history={history}>
          <div>
            <Routes />
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
