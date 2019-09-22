import React from 'react';
export class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      taskDescription: ""
    }

  }

  updateInputValue = (evt) => {
    this.setState({
      taskDescription: evt.target.value
    })
  }

  saveTask = () => {
    var text = this.state.taskDescription
    this.props.addItem(text)
    this.setState({ taskDescription: "" })
  }

  render() {
    return (
      <div>
        <div>Add taks bellow</div>
        <input value={this.state.taskDescription} onChange={this.updateInputValue} type="text" placeholder="Type here"></input>
        <button onClick={this.saveTask}    >Submit</button>
      </div>
    )
  }
}