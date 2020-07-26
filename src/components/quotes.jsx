import React, { useState } from "react";
const nombreBoton = "press";
const quotes = [
  "camaron que se duerme se lo lleva la corriente",
  "arbol que nace torcido jamas su rama endereza",
  "a muchacho barrigon ni que lo fajen chiquito",
];
function Quotes() {
  const [counter, setCounter] = useState(2);
  return (
    <div>
      <h1 onClick={(event) => setCounter(counter + 1)}>
        {quotes[counter % quotes.length]}
      </h1>
      <button onClick={(event) => setCounter(counter + 1)}>
        {nombreBoton}
      </button>
    </div>
  );
}
export default Quotes;
