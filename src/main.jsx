/* eslint-disable import/no-unresolved */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';
import '@/lib/styles/index.css';
import '@/lib/styles/fonts.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
