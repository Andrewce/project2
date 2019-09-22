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

    saveItem = (text, done) => {
        var newItem = { text: text, done: false }
        var updatedItems = [...this.state.items, newItem]
        this.setState({ items: updatedItems })
    }


    render() {
        return (

            <div>
                <h2>Todos:</h2>
                <Input addItem={this.saveItem} />
                {this.state.items.map((item, index) =>
                    <div key={index}>
                        <input onChange={() => { }} type="checkbox" checked={item.done} />
                        <span className={item.done ? "done" : ""}>
                            {item.text}
                        </span>
                    </div>
                )}
            </div>
        )
    }
}