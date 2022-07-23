import React from 'react';
import ReactDOM from 'react-dom/client';
import Talking, { Walking } from "./person";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Walking />
    <Talking />
  </React.StrictMode>
);