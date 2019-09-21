import React from 'react'

const Cockpit = (props) => {
    return (
        <button onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default Cockpit;