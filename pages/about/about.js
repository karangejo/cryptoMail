import React, { Component } from 'react';
import Layout from '../../components/layout';
import {Card, Grid, Segment} from 'semantic-ui-react';

class About extends Component {
  static getInitialProps(){
    const text = ["This is an Application for creating and managing RSA Encrypted MailBoxes on the Ethereum Network."
          + " It is deployed on Rinkeyby test network."
          + " Anyone can create a new MailBox with their Ethereum Account connected to the Rinkeby test network."
          + " the person who creates a MailBox is the manager of that MailBox."
          + " Only he or she can approve or disapprove connections to his or her MailBox."
          + " Only the PUBLIC key is ever exposed to others and is stored on the blockchain."
          + " It is the user's responsibility to keep his or her PRIVATE key a secret."]
    return{text};
  }


  render(){
    return(
      <Layout>
      <Grid  padded={true} centered={true}>
      <Segment raised={true} text-align="center" color="red">
      <h1>How to Use this App</h1>
      <Card>
         <Card.Content>
           <Card.Description>{this.props.text}</Card.Description>
         </Card.Content>
     </Card>
      </Segment>
      </Grid>
      </Layout>
    );
  }
}


export default About;
