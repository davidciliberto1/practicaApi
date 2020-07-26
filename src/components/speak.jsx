import React, { useState } from 'react';

const nombre = ' deivid:'
function Speak() {
    const [texto, setTexto] = useState('')
  return ( 
      <div>
  <h1>holiiiiis{nombre} {texto}  </h1>
  <input 
  type='text'
  placeholder='añade texto...'
  onChange={e => setTexto(e.target.value)}   
  ></input>
  </div>
  )
}

export default Speak;
