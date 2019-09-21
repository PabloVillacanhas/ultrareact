import React from 'react';
import Person from './Person/Person'

const personList = (props) => props.personsList.map((person, index) => {
    return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(person.id)}
        change={(event) => props.changed(event, person.id)} />
});

export default personList;