import React from 'react';
import Counter from './component/Counter';
import Greeting from './component/Greetings';
import ConditionalDisplay from './component/ConditionalDisplay';

function App() {
  return (
    <div>
      <Counter />
      <Greeting name="John" />
      <ConditionalDisplay show={true} />
    </div>
  );
}

export default App;
