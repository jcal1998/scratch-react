import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
}
// createRoot is a new API that lets us start rendering React into a container without
// providing a root component. This is useful for integrating React into an existing codebase.
// criar uma raiz para renderizar o react dentro de um container sem precisar de um componente raiz
// renderizar o componente App dentro do container
