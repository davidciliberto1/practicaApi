import React, { useState } from "react";
//TODO crear dinamicamente, con un map adentro de otro
//(palos.map(palo => valores.map(valor => ... )))
//[[][][][]] (usar reduce ? )
const mazo = [
  { valor: "2", palo: "t" },
  { valor: "3", palo: "t" },
  { valor: "4", palo: "t" },
  { valor: "5", palo: "t" },
  { valor: "6", palo: "t" },
  { valor: "7", palo: "t" },
  { valor: "8", palo: "t" },
  { valor: "9", palo: "t" },
  { valor: "10", palo: "t" },
  { valor: "j", palo: "t" },
  { valor: "q", palo: "t" },
  { valor: "k", palo: "t" },
  { valor: "a", palo: "t" },
  { valor: "2", palo: "p" },
  { valor: "3", palo: "p" },
  { valor: "4", palo: "p" },
  { valor: "5", palo: "p" },
  { valor: "6", palo: "p" },
  { valor: "7", palo: "p" },
  { valor: "8", palo: "p" },
  { valor: "9", palo: "p" },
  { valor: "10", palo: "p" },
  { valor: "j", palo: "p" },
  { valor: "q", palo: "p" },
  { valor: "k", palo: "p" },
  { valor: "a", palo: "p" },
  { valor: "2", palo: "c" },
  { valor: "3", palo: "c" },
  { valor: "4", palo: "c" },
  { valor: "5", palo: "c" },
  { valor: "6", palo: "c" },
  { valor: "7", palo: "c" },
  { valor: "8", palo: "c" },
  { valor: "9", palo: "c" },
  { valor: "10", palo: "c" },
  { valor: "j", palo: "c" },
  { valor: "q", palo: "c" },
  { valor: "k", palo: "c" },
  { valor: "a", palo: "c" },
  { valor: "2", palo: "d" },
  { valor: "3", palo: "d" },
  { valor: "4", palo: "d" },
  { valor: "5", palo: "d" },
  { valor: "6", palo: "d" },
  { valor: "7", palo: "d" },
  { valor: "8", palo: "d" },
  { valor: "9", palo: "d" },
  { valor: "10", palo: "d" },
  { valor: "j", palo: "d" },
  { valor: "q", palo: "d" },
  { valor: "k", palo: "d" },
  { valor: "a", palo: "d" },
];

function sacarCartaDeMazo() {
  return mazo[Math.floor(Math.random() * mazo.length)];
}

function nuevaCartaALaMano() {
  return sacarCartaDeMazo(mazo)
}

function Cartas() {
  const [mano, setMano] = useState();
  const [cartaNueva, setCartaNueva] = useState();

//   function calcularValorDeMano() {
//     const noAses= mano.filter(TodasMesnoAs)
//     const ases= mano.filter(SoloAses)
// const suma = noAses.reduce(sumar usando CalcularValorDeCarta)
// const sumaFinal = ases.map(as => calcularValorDeAs(as, valorDeLaManoSinAses))
// }

// function calcularValorDeAs(carta, valorDeLaManoSinAses) {}
// function calcularValorDeCarta(carta) {}
// const filtradas =  [1,2,3,4,5].filter(e => e> 2); // filtradas == [1,2]
  return (
    <div>
      <h2>{JSON.stringify(mano)}{JSON.stringify(cartaNueva)}</h2>
      {/* <h2>{calcularValorDeMano()}</h2> */}
      <button onClick={(event) => {
let cartas = [sacarCartaDeMazo(), sacarCartaDeMazo()];

          setMano(cartas);
      }}>Repartir</button>
      <button
        onClick={(event) => {  
          let cartaNueva = [nuevaCartaALaMano()]
          setCartaNueva(cartaNueva);
           
         }}
        
      >
        random
      </button>
    </div>
  );
}
export default Cartas;
