import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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

const App = props => {
    useEffect(() => {
        return props.history.push('/');
    }, []);
  return (
    <div className="App">
        <Navbar/>
        <Sidebar />
        <Switch>
              <Route path="/questions" component={Questions} />
              <Route path="/about" component={About}/>
              <Route path="/paymentinfo" component={PaymentInfo}/>
              <Route path="/grip/masuka" component={Masuka} />
              <Route path="/grip/blue-star" component={BlueStar} />
              <Route path="/grip/kawasaki" component={Kawasaki} />
              <Route path="/grip" component={Grip} />
              <Route path="/" component={News} />
        </Switch>      
    </div>
  );
}

export default withRouter(App);
