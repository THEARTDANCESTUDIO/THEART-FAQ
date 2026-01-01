import React from 'react';
import ReactDOM from 'react-dom/client';

// Immediate polyfill for environment variables
if (typeof window !== 'undefined') {
  (window as any).process = (window as any).process || { env: {} };
}

import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
}

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);