import React, { Component } from 'react';
import Layout from '../components/layout';
import {Card, Button,Segment} from 'semantic-ui-react';
import mailBoxFactory from '../ethereum/mailBoxFactory';
import CreateKeys from '../components/createKeys';
import CreateMailBox from '../components/createMailbox';
import { Link } from '../routes';


class Index extends Component {
  static async getInitialProps() {
    const mailboxes = await mailBoxFactory.methods.getDeployedMailBoxes().call();
    let userNames = [];
    let keys = [];
    for(var i = 0;i<mailboxes.length;i++){
       var name = await mailBoxFactory.methods.usernames(i).call();
       var key = await mailBoxFactory.methods.publicKeys(i).call();
       userNames[i] = name;
       keys[i] = key;
     }

    return { mailboxes, userNames, keys };
  }


  renderMailBoxes() {
    const items = this.props.mailboxes.map( (address,index) => {
      return {
        header: `User Name: ${this.props.userNames[index]}`,
        description: <Link route={`/mailBox/${address}`}><a>View Mailbox</a></Link>,
        meta: `Address: ${address}`,
        fluid: true,
        color: "green",
        raised: true
      };
    });
    return <Card.Group items= {items} />;
  }


  render() {
    return(
      <Layout>
      <Segment raised={true} color="orange">
      <h1>List of MailBoxes</h1>
        {this.renderMailBoxes()}
        </Segment>
        <CreateKeys/>
        <CreateMailBox/>
      </Layout>
    );
  }

}
export default  Index;
