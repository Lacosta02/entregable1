/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Card = ({nombre, mascota}) => {
    let capitalLetter =(str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    <div>
        <h1>Gracias por consultar {capitalLetter(nombre)}.</h1>
        <h2>Tu mascota preferida elegida es: {capitalLetter(mascota)}.</h2>
    </div>
  )
}

export default Card