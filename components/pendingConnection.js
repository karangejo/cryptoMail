import React, { Component} from 'react';
import {Card,Message,Button,Segment} from 'semantic-ui-react';
import web3 from '../ethereum/web3'
import mailBox from '../ethereum/mailBox';

class ShowPending extends Component {

  static async getInitialProps(props) {

  const pendingTrustedMailboxes = this.props.pendingTrustedMailboxes;
  const pendingTrustedPublicKeys = this.props.pendingTrustedPublicKeys;
  const pendingTrustedConnections = this.props.pendingTrustedConnections;



    return {pendingTrustedMailboxes,pendingTrustedPublicKeys,pendingTrustedConnections};
  }

  approveConnection = async (event) => {
    event.preventDefault();
  
  }

  disapproveConnection = async (event) => {
    event.preventDefault();

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
