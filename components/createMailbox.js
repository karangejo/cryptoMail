import React, { Component } from 'react';
import { Form, Button, Input, Message,Segment } from 'semantic-ui-react';
import keypair from 'keypair';
import mailBoxFactory from '../ethereum/mailBoxFactory';
import web3 from '../ethereum/web3'


class CreateMailBox extends Component {
  state = {
    errorMessage: '',
    publicKey: '',
    userName: '',
    message: '',
    loading: false,
    showMessage: false
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading:true, errorMessage: '',showMessage: false});
    try{
      const accounts = await web3.eth.getAccounts();
      await mailBoxFactory.methods
        .createMailBox(this.state.userName,this.state.publicKey)
        .send({
          from: accounts[0]
        });
      this.setState({showMessage: true, message:'MailBox Created Successfully'});
      Router.pushRoute('/');
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
        <label>Create a New Mailbox <br/><small><ul> <li>You need to generate and RSA keypair from above or generate your own and then paste it below.</li>
                                                      <li>If you do not trust this site to generate a key pair then please generate your own on your local machine.</li>
                                                      <li>Please be careful and only paste in the PUBLIC key.</li></ul></small></label>
        <Input
        label="RSA Public Key"
        labelPosition="right"
        value={this.state.publicKey}
        onChange={event =>
          this.setState({publicKey: event.target.value})}
      />
        <Input
        label="User Name"
        labelPosition="right"
        value={this.state.userName}
        onChange={event =>
          this.setState({userName: event.target.value})}
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

export default CreateMailBox;
