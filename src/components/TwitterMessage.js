import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    console.log(event.target.value)
    const newMessage = event.target.value
    this.setState({
      message: newMessage
    })
  }

  render() {
    let newCharCount = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        onChange={this.handleChange}
        value={this.state.message}
        />
        {newCharCount} characters remaining
      </div>
    );
  }
}

export default TwitterMessage;
