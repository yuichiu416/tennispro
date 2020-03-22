import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import News from './components/News';
import Questions from './components/Questions';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Sidebar />
        <Switch>
              <Route path="/questions" component={Questions} />
              <Route path="/" component={News} />
        </Switch>      
    </div>
  );
}

export default App;
