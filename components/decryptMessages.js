import React, { Component} from 'react';
import {Card,Segment,Message} from 'semantic-ui-react';
import { publicEncrypt, privateDecrypt } from 'crypto';

class DecryptedMessages extends Component {

  static async getInitialProps(props) {

    const messages = this.props.messages;
    const privateKey = this.props.privateKey;
    const decryptedMessages = [];

    for(var i=0;i<messages.length;i++){
      var decryptBuffer = Buffer.from(message[i], "base64");
      var decrypted = privateDecrypt(privateKey,decryptBuffer);
      decrypted = decrypted.toString();
      decryptedMessages[i] = decrypted;
    }



    return {messages, decryptedMessages, privateKey};
  }

  renderDecryptedMessages() {
    if( this.props.decryptMessages == undefined){
      return (
        <Message negative={true} content="Error! Did you enter the wrong PRIVATE key?"/>
      );
    }
    const items = this.props.decryptedMessages.map( (message,index) => {
      return {
        header: `Message Number: ${index+1}:`,
        description: `${message}`,
        fluid: true,
        color: "yellow",
        raised: true
      };
    });
    return <Card.Group items= {items} />;
  }

  render(){
    return (
      <Segment raised={true} color="orange">
      <h1>Decrypted Inbox</h1>
      {this.renderDecryptedMessages()}
      </Segment>
    );
  }
}

export default DecryptedMessages;
