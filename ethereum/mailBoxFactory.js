import web3 from './web3';
import abi from './abi/mailBoxFactory.json'

// this is the address of the latest deployment of the contract
//change this to connect to a different deployment

const address = '0x346863eaf96b5961f2f7f4970b8ed710d27ebf27';

const instance = new web3.eth.Contract(abi,address);

export default instance;
