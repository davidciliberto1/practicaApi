import React, { useState } from 'react'
const carta = [
     '2t', '3t', '4t', '5t', '6t', '7t', '8t', '9t', '10t', 'jt', 'qt', 'kt', 'at',
     '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', 'jp', 'qp', 'kp', 'ap',
     '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', 'jc', 'qc', 'kc', 'ac',
     '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', 'jd', 'qd', 'kd', 'ad',
]



function Cartas() {
    const [cartas, setCarta] = useState('');
    const [suma, setSuma] =useState('');
    console.log(suma);
    function handleChange(e) {
        return (
        cartas + suma
        )
        
       
    }

    return(
        <div>
            <h2>{cartas}</h2>
           
            <button
            onClick={(event) => setCarta(carta[Math.floor(Math.random()*52)])}
            
            >random</button>
             <h1
            onSubmit={(event) => setSuma(event.target.value + cartas)}
            >Suma: {suma}</h1>
            
        </div>
    )
    
}
export default Cartas;