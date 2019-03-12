import React, { Component} from 'react';
import {Card,Segment,Message} from 'semantic-ui-react';

class ShowContacts extends Component {

  static async getInitialProps(props) {

  const trustedMailBoxes = this.props.trustedMailBoxes;
  const trustedConnections = this.props.trustedConnections;
  const myTrustedKeys = this.props.myTrustedKeys;



    return {trustedMailBoxes,trustedConnections,myTrustedKeys};
  }

  renderConnections() {
    if(!this.props.trustedMailBoxes.length){
      return (
        <Message content="No Trusted Connections!"/>
      );
    }

    const items = this.props.trustedMailBoxes.map( (mailbox,index) => {
      return {
        header: `User Address: ${this.props.trustedConnections[index]}:`,
        meta: `Public Key: ${this.props.myTrustedKeys[index]}`,
        description: `MailBox: ${mailBox}`,
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
      <h1>Trusted Connections</h1>
      {this.renderConnections()}
      </Segment>
    );
  }
}

export default ShowContacts;
