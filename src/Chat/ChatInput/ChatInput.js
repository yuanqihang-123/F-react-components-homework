import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.handlerClickButton = this.handlerClickButton.bind(this);
    }

    // componentDidUpdate(){
    //     document.getElementById("message_input").addEventListener('keyup',this.handlerClickButton);
    // }
    //
    // componentWillUmount(){
    //     document.getElementById("message_input").removeEventListener("keyup",this.handlerClickButton);
    // }


    handlerClickButton(){
        const message = this.inputValue.value;
        const questionOjb = {}
        questionOjb.text = message;
        questionOjb.role = "CUSTOMER";
        this.props.handleInputMessage(message,questionOjb)
        this.inputValue.value = "";
    }

  render() {
    return (
      <footer className="ChatInput">
        <input id="message_input"
               type="text"
               ref={input => this.inputValue = input}
        />
        <button type="button" onClick={this.handlerClickButton}>Send</button>
      </footer>
    );
  }


}

export default ChatInput;
