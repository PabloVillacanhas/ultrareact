import React, { Component } from 'react'

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and im {props.age} years old}</p>
      {props.children}
    </div>
  )
}

export default person;