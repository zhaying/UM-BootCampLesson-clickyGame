import React, { Component } from 'react';
import Navbar from "./componets/Navbar";
import Header from "./componets/Header";
import Main from "./componets/Main";
import Footer from "./componets/Footer";

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };
  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
