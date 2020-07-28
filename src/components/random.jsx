import React, { useState } from 'react'

function Random() {
const [cuenta, setCuenta] = useState(0);

    return(
        <div>
            <h1>{Math.round(cuenta)}</h1>
            <button
            onClick={(event) => setCuenta(cuenta + Math.floor(Math.random()*10)) }
            >HIT ME!</button>
        </div>
    )
}
export default Random;