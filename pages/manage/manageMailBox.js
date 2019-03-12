import React, { Component} from 'react';
import Layout from '../../components/layout';
import mailBox from '../../ethereum/mailBox';
import {Card,Segment,Grid,Button,Form,Input} from 'semantic-ui-react';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3'
import DecryptedMessages from '../../components/decryptMessages';
import ShowContacts from '../../components/showContacts';
import ShowPending from '../../components/pendingConnection';

class ManageMailBox extends Component {

  static async getInitialProps(props) {
    const myMailBox = mailBox(props.query.address);
    const mailBoxAddress = props.query.address;
    const userName = await myMailBox.methods.userName().call();
    const myPublicKey = await myMailBox.methods.publicKey().call();
    const me = await myMailBox.methods.me().call();
    const numMessages= await myMailBox.methods.numberOfMessages().call();
    const trustedConnections = await myMailBox.methods.getMyTrustedConnections().call();
    const trustedMailBoxes = await myMailBox.methods.getMyTrustedMailBoxes().call();
    const accounts = await web3.eth.getAccounts();
    const pendingTrustedMailboxes = await myMailBox.methods.pendingTrustedMailboxes().call();
    const pendingTrustedConnections = await myMailBox.methods.pendingTrustedConnections().call();
    const pendingTrustedPublicKeys = await myMailBox.methods.pendingTrustedPublicKeys().call();

    var myTrustedKeys = [];
    for(var i=0;i<trustedConnections.length;i++){
      var key = await myMailBox.methods.myTrustedPublicKeys(i).call();
      myTrustedKeys[i]=key;
    }
    var messages = [];
    for(var i=0;i<numMessages;i++){
      var message = await myMailBox.methods.mailbox(i).call();
      messages[i]=message;
    }
    var managerLogIn = false;
    if(accounts[0]==me){
      managerLogIn=true;
    }

    return {myMailBox,mailBoxAddress,userName,myPublicKey,me,numMessages,messages,trustedConnections,trustedMailBoxes,myTrustedKeys,managerLogIn,pendingTrustedMailboxes,pendingTrustedPublicKeys,pendingTrustedConnections};
  }

  state = {
    showDecryptedMessages: false,
    privateKey: ''
  }



    renderMessages() {
      const items = this.props.messages.map( (message,index) => {
        return {
          header: `Message Number: ${index+1}`,
          meta: `${message}`,
          fluid: true,
          color: "green",
          raised: true
        };
      });
      return <Card.Group items= {items} />;
    }

    renderDecryptedMessages(){
      return(
        <DecryptedMessages messages={this.props.messages} privateKey={this.state.privateKey}/>
      );
    }

    onSubmit = (event) => {
      this.setState({showDecryptedMessages:true})
    }


  renderForManager(){
    return(
      <div>
      <Segment raised={true} color="orange">
      <h5>User Name: {this.props.userName}<br/><small>{this.props.me}</small></h5>
      <h5>MailBox Address: <br/><small>{this.props.mailBoxAddress}</small></h5>
      <h5>Number of Messages: {this.props.numMessages}</h5>
      <h5>My Public Key: <br/><small>{this.props.myPublicKey}</small></h5>
      <h5>Number of Trusted Connections: {this.props.trustedConnections.length}</h5>
      <ShowPending pendingTrustedMailboxes={this.props.pendingTrustedMailboxes} pendingTrustedPublicKeys={this.props.pendingTrustedPublicKeys} pendingTrustedConnections={this.props.pendingTrustedConnections}/>
      </Segment>
      <Segment raised={true} color="purple">
      <h1>Encrypted Inbox</h1>
      {this.renderMessages()}
      </Segment>
      <Segment raised={true} color="blue">

      <Form onSubmit={this.onSubmit}>
      <Form.Field>
        <label>Enter Your PRIVATE key to Decrypt Messages. <br/><small><ul>
                                                      <li>Carefull! Do not reveal your PRIVATE key to anyone.</li>
                                                      <li>If you do not trust this site to decrypt your messages please copy the encryted messages and decrypt them yourself.</li></ul></small></label>
        <Input
        label="Private Key"
        labelPosition="right"
        value={this.state.privateKey}
        onChange={event =>
          this.setState({privateKey: event.target.value})}
      />
      </Form.Field>
      <Button primary>Decrypt</Button>
      {this.state.showDecryptedMessages && this.renderDecryptedMessages()}
    </Form>
    </Segment>
    <ShowContacts trustedConnections={this.props.trustedConnections} trustedMailBoxes={this.props.trustedMailBoxes} myTrustedKeys={this.props.myTrustedKeys}/>
      </div>
    );
  }

  renderError(){
    return(
      <Segment raised={true} color="orange">
      <h1>Oops! You are not the Owner of this MailBox!</h1>
      </Segment>
    );
  }

  renderCondition(){
    if(this.props.managerLogIn){
      return (this.renderForManager());
    }
    return (this.renderError());
  }


  render(){
    return(
      <Layout>
      <Segment raised={true} color="blue">
      {this.renderCondition()}
      </Segment>
      </Layout>
    );
  }
}

export default ManageMailBox;
