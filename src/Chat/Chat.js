import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleInputMessage = this.handleInputMessage.bind(this);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  handleInputMessage(message,questionObj){
    const result = answersData.find(answer=>answer.tags.includes(message));
    let messages = null;
    if (result){
     messages = this.state.messages.concat(questionObj,result);
    }else {
     messages = this.state.messages.concat(questionObj);
    }

    this.setState({
      messages
    })
  }

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput handleInputMessage={this.handleInputMessage}/>
      </main>
    );
  }
}

export default Chat;
