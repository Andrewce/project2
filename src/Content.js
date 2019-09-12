import React from 'react';


export const Content = () => {
    class TodoApp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                items: [
                    { text: "Learn JavaScript", done: false },
                    { text: "Learn React", done: false },
                    { text: "Play around in JSFiddle", done: true },
                    { text: "Build something awesome", done: true }
                ]
            }
        }
 
    }
            return (
                <div>
                    <h2>Todos:</h2>
                    <ol>
                        {this.state.items.map(item => (
                            <li key={item.i}>
                                <label>
                                    <input type="checkbox" disabled readOnly checked={item.done} />
                                    <span className={item.done ? "done" : ""}>{item.text}</span>
                                </label>
                            </li>
                        ))}
                    </ol>
                </div>
            )
        
};
// ceva nu merge aici, si pagina nu se incarca