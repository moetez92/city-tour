import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from'./component/navbar';
import Tourlist from'./component/tour-list/Tourlist';
import './App.scss';

class App extends Component {
  render() {
    return <React.Fragment>
   
    <Navbar/>   
    <Tourlist/> 
     </React.Fragment>;
  }
}

export default App;
