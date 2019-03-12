import React, { Component} from 'react';
import Layout from '../../components/layout';
import mailBox from '../../ethereum/mailBox';
import {Card,Segment,Grid,Button} from 'semantic-ui-react';
import { Link } from '../../routes';
import ConnectToMailBox from '../../components/connectToMailBox';
import SendToMailBox from '../../components/sendMessage';
import SendEncryptedToMailBox from '../../components/sendEncryptedMessage';


class ShowMailBox extends Component {

  static async getInitialProps(props) {
    const myMailBox = mailBox(props.query.address);
    const mailBoxAddress = props.query.address;
    const userName = await myMailBox.methods.userName().call();
    const myPublicKey = await myMailBox.methods.publicKey().call();
    const me = await myMailBox.methods.me().call();
    const numMessages= await myMailBox.methods.numberOfMessages().call();

    return {myMailBox,mailBoxAddress,userName,myPublicKey,me,numMessages};
  }

  renderComponents(){
    return (
      <div>
      <ConnectToMailBox mailBoxAddress= {this.props.mailBoxAddress}/>
      <SendToMailBox mailBoxAddress={this.props.mailBoxAddress}/>
      <SendEncryptedToMailBox mailBoxAddress={this.props.mailBoxAddress} publicKey={this.props.myPublicKey}/>
      </div>
    )
  }


  render(){
    return(
      <Layout>
      <Segment raised={true} color="blue">
      <Segment raised={true} color="orange">
      <h5>User Name: {this.props.userName}<br/><small>{this.props.me}</small></h5>
      <h5>MailBox Address: <br/><small>{this.props.mailBoxAddress}</small></h5>
      <h5>Number of Messages: {this.props.numMessages}</h5>
      <h5>My Public Key: <br/><small>{this.props.myPublicKey}</small></h5>
      </Segment>
      <Segment raised={true} color="orange">
      <Link route={`/mailBox/${this.props.mailBoxAddress}/manage`}>
        <a>
        <Button
          floated="left"
          content="Manage This MailBox"
          primary
          />
          </a>
      </Link>
      <br/>
      <h5><small>Only the owner of this MailBox can do this.</small></h5>
      </Segment>
      { this.props.mailBoxAddress && this.props.myPublicKey && this.renderComponents()}
      </Segment>
      </Layout>
    );
  }
}

export default ShowMailBox;
