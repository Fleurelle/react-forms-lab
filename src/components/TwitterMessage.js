import React from "react";

//1. This component takes one prop: maxChars which is a number 

//2. You'll find an <input type="text"> in this component. Make this a controlled component by adding the attributes to the <input> element. 
//Its value should be saved in the component's state and should update on every change to the input.

//3. Show the remaining characters in the component. I.E subtract values typed from total values.

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    let totalChar = this.props.maxChars - this.state.value.length
    return (
      <div>
        {totalChar}
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
