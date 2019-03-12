import React, { Component } from 'react';
import { Form, Button, Input, Message,Segment } from 'semantic-ui-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import mailBox from '../ethereum/mailBox';
import web3 from '../ethereum/web3'


class SendEncryptedToMailBox extends Component {
  state = {
    errorMessage: '',
    encryptedMessage: '',
    loading: false,
    showMessage: false,
    outcome: '',
    showPublicKey: false
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading:true, errorMessage: '',showMessage: false});
    try{
      const accounts = await web3.eth.getAccounts();
      const mailbox = mailBox(this.props.mailBoxAddress);

      await mailbox.methods
        .sendMessage(this.state.encryptedMessage)
        .send({
          from: accounts[0]
        });
      this.setState({showMessage: true,outcome: 'Sent Message Successfully!'});
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

  showKey = (event) => {
    this.setState({showPublicKey:true})
  }

  renderPublicKey(){
    return(
      <div>
      <Message content={this.props.publicKey}/>
      <CopyToClipboard text={this.state.publicKey}
           onCopy={() => this.setState({copied: true})}>
           <button>Copy Public Key</button>
      </CopyToClipboard>
      </div>
    );
  }



  render() {
    return (
      <Segment raised={true} color="orange" text-align="center">
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
        <label>Send An Already Encrypted Message To This MailBox <br/><small><ul> <li>You can only do this if you have previously connected with this Mailbox and the owner has approved you.</li>
                                                      <li>Carefull! Do not reveal your PRIVATE key to anyone.</li>
                                                      <li>Your message WILL NOT be encrypted with the PUBLIC key associated with this MailBox.</li>
                                                      <li>You must encrypt the message yourself using the owner's PUBLIC key and then paste it in.</li></ul></small></label>
        <Input
        label="Encrypted Message"
        labelPosition="right"
        value={this.state.encryptedMessage}
        onChange={event =>
          this.setState({encryptedMessage: event.target.value})}
      />
      </Form.Field>
      <Message error header="Oops!" content={this.state.errorMessage}/>
      <Button loading={this.state.loading} primary>Send</Button>
      {this.state.showMessage && this.renderMessage()}
    </Form>
    <Button secondary onClick={this.showKey} >View Public Key</Button>
    {this.state.showPublicKey && this.renderPublicKey()}
    </Segment>
    );
  }
}

export default SendEncryptedToMailBox;
