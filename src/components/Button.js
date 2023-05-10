import React from 'react'

function Button(props) {
  return (
    <button className={props.style}>{props.text}</button>
  )
}

export default Button