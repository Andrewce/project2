import React from 'react';
import { Header } from './Header'
import { Input } from './Input'
import { TodoApp } from './TodoApp'


import './App.css';

export const App = () => (
  <div className="App">
    <Header />
    <Input />
    <TodoApp />
  </div>
);