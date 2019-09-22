import React from 'react';
import { Header } from './Header'
import { TodoApp } from './TodoApp'


import './App.css';

export const App = () => (
  <div className="App">
    <Header />
    <TodoApp />
  </div>
);