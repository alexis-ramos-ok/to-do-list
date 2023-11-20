import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header/Header';
import List from './components/List/List';
import Form from './components/Form/Form';
import Clock from './components/Clock/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <Clock />
    <App />
    <List />
    <Form />
  </React.StrictMode>
);