import React, { useState } from 'react'

function Random() {
const [cuenta, setCuenta] = useState(0);

    return(
        <div>
            <h1>{cuenta}</h1>
            <button
            onClick={(event) => setCuenta(cuenta + Math.random())}
            >HIT ME!</button>
        </div>
    )
}
export default Random;