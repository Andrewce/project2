import React from 'react';
import { TodoApp } from './TodoApp'


export const Input = () => (
  <div class="form">
    <div>Add taks bellow</div>
    <input type="text" id="entry" name="entry" placeholder="Type here"></input>
    <button id="submitEntry">Submit</button>
  </div>
)