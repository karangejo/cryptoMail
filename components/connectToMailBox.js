import React, { Component } from 'react';
import { Form, Button, Input, Message,Segment } from 'semantic-ui-react';
import mailBox from '../ethereum/mailBox';
import web3 from '../ethereum/web3'


class ConnectToMailBox extends Component {
  state = {
    errorMessage: '',
    publicKey: '',
    mailboxAddress: '',
    message: '',
    loading: false,
    showMessage: false
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading:true, errorMessage: '',showMessage: false});
    try{
      const accounts = await web3.eth.getAccounts();
      const mailbox = mailBox(this.props.mailBoxAddress);
      await mailbox.methods
        .connectWithMe(this.state.publicKey,this.state.mailboxAddress)
        .send({
          from: accounts[0]
        });
      this.setState({showMessage: true});
      Router.pushRoute(`/mailBox/${this.props.mailBoxAddress}`);
    } catch (err) {
      this.setState({errorMessage: err.message});
    }
    this.setState({loading:false});
  };

  renderMessage(){
    return(
      <div>
      <Message content={this.state.message}/>
      </div>
    );
  }


  render() {
    return (
      <Segment raised={true} color="blue" text-align="center">
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
        <label>Connect to this MailBox <br/><small><ul> <li>Please enter your PUBLIC key and your own MailBox address.</li>
                                                      <li>Carefull! Do not reveal your PRIVATE key to anyone.</li>
                                                      <li>Please be careful and only paste in the PUBLIC key.</li>
                                                      <li>You will have to wait to be approved by the MailBox owner before you can send messages with the owners PUBLIC key</li></ul></small></label>
        <Input
        label="RSA Public Key"
        labelPosition="right"
        value={this.state.publicKey}
        onChange={event =>
          this.setState({publicKey: event.target.value})}
      />
        <Input
        label="MailBox Address"
        labelPosition="right"
        value={this.state.mailboxAddress}
        onChange={event =>
          this.setState({mailboxAddress: event.target.value})}
      />
      </Form.Field>
      <Message error header="Oops!" content={this.state.errorMessage}/>
      <Button loading={this.state.loading} primary>Create</Button>
        {this.state.showMessage && this.renderMessage()}
    </Form>
    </Segment>
    );
  }
}

export default ConnectToMailBox;
