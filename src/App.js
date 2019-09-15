import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Pablo', age: 25 },
        { id: 2, name: 'Marta', age: 26 },
        { id: 3, name: 'Maria', age: 27 }
      ],
      showPersons: true
    };
  }

  nameChangeHandler = (event, idPerson) => {

    //Make a copy of persons 
    let persons = this.state.persons.slice()

    //Update the person we selected
    persons = persons.map(p => {
      if (p.id === idPerson){
        p.name = event.target.value
      }
      return p;
    });

    //Update state
    this.setState(persons)
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler(personIndex) {
    delete this.state.persons[personIndex]
  }

  render() {

    let showPersons = this.state.showPersons ?
      this.state.persons.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            change={(event) => this.nameChangeHandler(event, person.id)} />
      )) : null;

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler}>{this.state.showPersons ? "Hide Persons" : "Show Persons"}</button>
        {this.state.showPersons ?
          <div>
            {showPersons}
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
