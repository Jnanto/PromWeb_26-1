import React from 'react'
import { useState } from 'react';
import './Age.css'

const Age = () => {
    const [Edad, setEdad] = useState(0);

    const suma = () => {
        setEdad(Edad + 1)
    }
    const resta = () => {
        if (Edad > 0)
            setEdad(Edad - 1)
    }
    return (
        <div className='Age'>
            <h1>Edad</h1>
            <div className='ContainerAge'>
                <div className='ButtonAge' onClick={() => resta()}> -</div>
                <h2>{Edad}</h2>
                <div className='ButtonAge' onClick={() => suma()}> +</div>
            </div>
        </div>
    )
}

export default Age