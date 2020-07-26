import React, { useState } from 'react';

const habla = ' deivid'
function Speak() {
    const [texto, setTexto] = useState('')
  return ( 
      <div>
  <h1>holiiiiis{habla} {texto}</h1>
  <input 
  type='text'
  placeholder='cambie color'
  onChange={e => setTexto(e.target.value)}   
  ></input>
  </div>
  )
}

export default Speak;
