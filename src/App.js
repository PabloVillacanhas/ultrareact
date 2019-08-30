import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      persons: [
      {name: 'Pablo', age: 25},
      {name: 'Marta', age: 26},
      {name: 'Maria', age: 27}
    ]};
  }

  switchStateHandler = () => {
    this.setState({
      persons: [
        {name: 'Pablito', age: 2},
        {name: 'Martita', age: 2},
        {name: 'Maria', age: 2}
      ]
    });
  }

  render(){
      return (
      <div className="App">
        <button onClick={this.switchStateHandler}>Change state</button>
        {this.state.persons.map(person => (
          <Person name={person.name} age={person.age} someProp="da"/>
        ))}
      </div>
    );
  }
}

export default App;
