import React, { Component } from 'react'

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
      info: props.info
    }
  }

  componentWillReceiveProps({name, age, info}) {
    this.setState({name: name, age:age, info:info})
  }

  render(){
    return (<div>
      "I'm {this.state.name} and i'm {this.state.age}."
    </div>)
  }
}
