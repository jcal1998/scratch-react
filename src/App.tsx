/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Já já lee vai ser demitido</h1>
      <h2>Contador: {counter} dias sem ser demitido</h2>
      <button type="button" onClick={handleClick}>
        Aumentar contador
      </button>
    </>
  );
};

export default App;
