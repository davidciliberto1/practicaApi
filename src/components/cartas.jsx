import React, { useState } from 'react'
const cartas = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'
]

function Cartas() {
    const [carta, setCarta] = useState(0)
    return(
        <div>
            <h1>{carta}</h1>
        </div>
    )
}
export default Cartas;