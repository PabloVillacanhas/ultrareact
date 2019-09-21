import React, { Component } from 'react';
import './App.css';
import PersonList from '../components/PersonList/PersonList.js'
import { remove } from 'lodash'

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
      if (p.id === idPerson) {
        p.name = event.target.value
      }
      return p;
    });

    //Update state
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = (personId) => {
    let persons = [...this.state.persons]
    remove(persons, (p) => p.id === personId)
    this.setState({ persons: persons })
  }

  render() {
    let personsList = null;
    if (this.state.showPersons) {
      personsList = (<div>
        <PersonList
          personsList={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      </div >)
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler}>{this.state.showPersons ? "Hide Persons" : "Show Persons"}</button>
        {personsList}
      </div>
    );
  }
}

export default App;
