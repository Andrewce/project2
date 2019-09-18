import React from 'react';
import './index.css';
import { Input } from './Input'


export class TodoApp extends React.Component {

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

    addItem = (text, done) => {
        var newEntry = { text: document.getElementById("entry").value }
        this.setState({ items: this.state.items.concat(newEntry) });
        document.getElementById("entry").value = "";
    }


    render() {
        return (

            <div>
                <h2>Todos:</h2>
                <button onClick={this.addItem}>Click</button>
                {this.state.items.map((item, index) => <div key={index}>
                    <input type="checkbox" checked={item.done} />
                    <span className={item.done ? "done" : ""}>
                        {item.text}
                    </span>
                </div>
                )}
            </div>
        )
    }
}