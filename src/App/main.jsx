/* eslint-disable import/no-unresolved */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import './styles/index.css';
import './styles/fonts.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
