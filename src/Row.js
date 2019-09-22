import React from 'react';

export const Row = (props) => (
    <div>
        <input onChange={props.markAsDone} type="checkbox" checked={props.done} />
        <span className={props.done ? "done" : ""}>
            {props.text}
        </span>
    </div>
)