import React, { useState } from 'react'

 function Contador() {
const [cuenta, setCuenta] = useState(0)

return (
    <div>
        <button
        onClick={(event) => setCuenta(cuenta - 1)}
        >Resta...</button>
        {cuenta}
        <button
        onClick={(event) => setCuenta(cuenta + 1)}
        >Push me...</button>
    </div>
)
 }
export default Contador;