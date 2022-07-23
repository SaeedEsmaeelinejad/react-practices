import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from "./app";
import Talking from "./person";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Talking />
  </React.StrictMode>
);