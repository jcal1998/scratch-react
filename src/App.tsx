import React, { useState } from 'react';

const App: React.FC = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const handleClick = (): void => {
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
