import React, { Component } from 'react';
import { Form, Button, Input, Message,Segment } from 'semantic-ui-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import keypair from 'keypair';



class CreateKeys extends Component {
  state = {
    errorMessage: '',
    publicKey: '',
    privateKey: '',
    loading: false,
    showMessage: false,
    copied: false,
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({loading:true, errorMessage: '',showMessage: false});
    try{
      var pair = keypair();
      this.setState({showMessage: true, publicKey: pair.public, privateKey: pair.private});
    } catch (err) {
      this.setState({errorMessage: err.message});
    }
    this.setState({loading:false});
  };





  renderKeys(){
    return(
      <div>
      <Message content={this.state.publicKey}/>
      <CopyToClipboard text={this.state.publicKey}
         onCopy={() => this.setState({copied: true})}>
         <button>Copy Public Key</button>
       </CopyToClipboard>
      <Message content={this.state.privateKey}/>
      <CopyToClipboard text={this.state.privateKey}
         onCopy={() => this.setState({copied: true})}>
         <button>Copy Private Key</button>
       </CopyToClipboard>
      </div>
    );
  }


  render() {
    return (
      <Segment raised={true} color="pink" text-align="center">
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
        <label>Create RSA Key Pair <br/><small><ul> <li>This may take a minute. Please be patient.</li>
                                                      <li>Please be careful! This keypair is generated in your browser.</li>
                                                      <li>Nobody else should see your PRIVATE key. It's for you only.</li>
                                                      <li>Please keep your PRIVATE key somewhere safe. You will need it to decrypt messages from you inbox.</li></ul></small></label>
      </Form.Field>
      {this.state.showMessage && this.renderKeys()}
      <Message error header="Oops!" content={this.state.errorMessage}/>
      <Button loading={this.state.loading} primary>Create</Button>
    </Form>
    </Segment>
    );
  }
}

export default CreateKeys;
