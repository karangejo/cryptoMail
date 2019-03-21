import React, { Component} from 'react';
import {Card,Message,Button,Segment} from 'semantic-ui-react';
import web3 from '../ethereum/web3'
import mailBox from '../ethereum/mailBox';

class ShowPending extends Component {

  state = {
    approved: null,
    message: '',
  }

  static async getInitialProps(props) {

  const pendingTrustedMailboxes = this.props.pendingTrustedMailboxes;
  const pendingTrustedPublicKeys = this.props.pendingTrustedPublicKeys;
  const pendingTrustedConnections = this.props.pendingTrustedConnections;



    return {pendingTrustedMailboxes,pendingTrustedPublicKeys,pendingTrustedConnections};
  }

  approveConnection = async (event) => {
    event.preventDefault();
    console.log("approving COnnection");
    try{
      const accounts = await web3.eth.getAccounts();
      const mailbox = mailBox(this.props.mailBoxAddress);
      await mailbox.methods.approveConnection().send({from:accounts[0]});
      this.setState({approved: true});
      Router.pushRoute(`/mailBox/${this.props.mailBoxAddress}/manage`);
    } catch (err) {
      this.setState({errorMessage: err.message});
      console.log(err.message);
    }
  }

  disapproveConnection = async (event) => {
    event.preventDefault();
    try{
      const accounts = await web3.eth.getAccounts();
      const mailbox = mailBox(this.props.mailBoxAddress);
      await mailbox.methods.disapproveConnection().send({from:accounts[0]});
      this.setState({approved: false});
      Router.pushRoute(`/mailBox/${this.props.mailBoxAddress}/manage`);
    } catch (err) {
      this.setState({errorMessage: err.message});
      console.log(err.message);
    }
  }

  renderPendingConnection() {
    if(!this.props.pendingTrustedMailboxes.length){
      return (
        <Message content="No New Connections!"/>
      );
    }
    return (
      <div>
      <Card
        header={`MailBox: ${this.props.pendingTrustedMailboxes}`}
        meta={`Connection: ${this.props.pendingTrustedConnections}`}
        description ={`Public Key: ${this.props.pendingTrustedPublicKeys}`}
        fluid="true"
        />
        <Button onClick={this.approveConnection}>Approve</Button>
        <Button onClick={this.disapproveConnection}>Disapprove</Button>
        </div>
    );
  }

  render(){
    return (
      <div>
      <Segment raised={true} color="orange">
      <h3>Pending Connection</h3>
      {this.renderPendingConnection()}
      </Segment>
      </div>
    );
  }
}

export default ShowPending;
