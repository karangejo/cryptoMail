import React, { Component } from 'react';
import { Form, Button, Input, Message,Segment } from 'semantic-ui-react';
import mailBox from '../ethereum/mailBox';
import web3 from '../ethereum/web3'
import { publicEncrypt, privateDecrypt } from 'crypto';



class SendToMailBox extends Component {
  state = {
    errorMessage: '',
    publicKey: '',
    mailboxAddress: '',
    message: '',
    encryptedMessage: '',
    loading: false,
    showMessage: false,
    outcome: ''
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading:true, errorMessage: '',showMessage: false});
    try{
      const accounts = await web3.eth.getAccounts();
      const mailbox = mailBox(this.props.mailBoxAddress);
      const pubKey = await mailbox.methods.publicKey().call();

      var encryptBuffer = Buffer.from(this.state.message);
      var encrypted = publicEncrypt(pubKey,encryptBuffer);
      var encrypted = encrypted.toString("base64");

      await mailbox.methods
        .sendMessage(this.state.encryptedMessage)
        .send({
          from: accounts[0]
        });
      this.setState({showMessage: true,publicKey: pubKey,outcome: 'Sent Message Successfully!',encryptedMessage: encrypted});
    //  Router.pushRoute(`/mailBox/${this.props.mailBoxAddress}`);
    } catch (err) {
      this.setState({errorMessage: err.message});
    }
    this.setState({loading:false});
  };

  renderMessage(){
    return(
      <div>
      <Message content={this.state.outcome}/>
      </div>
    );
  }


  render() {
    return (
      <Segment raised={true} color="orange" text-align="center">
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
        <label>Send A Message To This MailBox <br/><small><ul> <li>You can only do this if you have previously connected with this Mailbox and the owner has approved you.</li>
                                                      <li>Carefull! Do not reveal your PRIVATE key to anyone.</li>
                                                      <li>Your message will be encrypted with the PUBLIC key associated with this MailBox.</li>
                                                      <li>If You want to encrypt the message yourself because you do not trust this site please use the form below.</li></ul></small></label>
        <Input
        label="Unencrypted Message"
        labelPosition="right"
        value={this.state.message}
        onChange={event =>
          this.setState({message: event.target.value})}
      />
      </Form.Field>
      <Message error header="Oops!" content={this.state.errorMessage}/>
      <Button loading={this.state.loading} primary>Send</Button>
        {this.state.showMessage && this.renderMessage()}
    </Form>
    </Segment>
    );
  }
}

export default SendToMailBox;
