import React from 'react';
import Quotes from './components/quotes';
import Speak from './components/speak';
import Contador from './components/counter';
import Random from './components/random';

function App() {
  return (
    <div className="App">
      <Speak/>
      <Quotes/>  
      <Contador/>
      <Random/>
    </div>
  );
}

export default App;
