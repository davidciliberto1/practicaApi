import React from 'react';
import Quotes from './components/quotes';
import Speak from './components/speak';
import Contador from './components/counter'
function App() {
  return (
    <div className="App">
      <Speak/>
      <Quotes/>  
      <Contador/>
    </div>
  );
}

export default App;
