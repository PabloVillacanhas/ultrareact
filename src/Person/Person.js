import React from 'react'
import './Person.scss';
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click} >I'm {props.name} and im {props.age} years old</p>
      {props.children}
      <input type="text" onChange={props.nameChange} value={props.name}></input>
    </div>
  )
};

export default person;