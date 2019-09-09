import React from 'react';

export const Input = () => (
    <div class="form">
        <div>Add taks bellow</div>
    <input type="text" id="entry" name="entry" placeholder="Type here"></input>
    <button onclick="addTodo(); populate()">Submit</button>
  </div>
)