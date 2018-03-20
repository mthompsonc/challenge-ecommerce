import React, { Component } from 'react';
import Items from './../../../Items/';
import Cart from './../../../Cart/';
import Title from './../../../Title/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="counter">
          <Cart />
          <Title />
        </div>
        <div className="productsApp">
          <Items />
        </div>
      </div>
    );
  }
}

export default App;