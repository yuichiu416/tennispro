import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import News from './components/News';
import Questions from './components/Questions';
import About from './components/About';
import PaymentInfo from './components/Reused/PaymentInfo';
import Masuka from './components/Grip/Masuka';
import BlueStar from './components/Grip/BlueStar';
import Kawasaki from './components/Grip/Kawasaki';
import Grip from './components/Grip';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Sidebar />
        <Switch>
              <Route path="/tennispro/questions" component={Questions} />
              <Route path="/tennispro/about" component={About}/>
              <Route path="/tennispro/paymentinfo" component={PaymentInfo}/>
              <Route path="/tennispro/grip/masuka" component={Masuka} />
              <Route path="/tennispro/grip/blue-star" component={BlueStar} />
              <Route path="/tennispro/grip/kawasaki" component={Kawasaki} />
              <Route path="/tennispro/grip" component={Grip} />
              <Route path="/tennispro" component={News} />
        </Switch>      
    </div>
  );
}

export default App;
